import Axios from 'axios';
export const FETCH_POKEMON_REQUEST= 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS= 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE= 'FETCH_POKEMON_FAILURE';

export const fetchPokRequest =()=>{
    return{
        type:  FETCH_POKEMON_REQUEST
    }
}
export const fetchPokSuccess =(Pokemon)=>{
    return{
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fetchPokFailure =(error)=>{
    return{
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}
const fetchPok=(valor)=>{
    return (dispatch)=>{
        dispatch(fetchPokRequest());
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}
        `).then(response=>{
            dispatch(fetchPokSuccess([response.data]));
        })
        .catch(error=>{
            dispatch(fetchPokFailure('Not Found'));
        });
    }
}
export default fetchPok;