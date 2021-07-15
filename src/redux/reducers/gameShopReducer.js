import { BUY_POKEMON } from "../actions/gameShopAction"
import { RETURN_POKEMON } from "../actions/gameShopAction"
//initial state
const defaultPokState={
    pokemon:30
};
const gameShop=(state= defaultPokState, action)=>{
    switch (action.type) {
        case BUY_POKEMON:{
            return{
                ...state,pokemon: state.pokemon- action.payload
            }
        }
        case RETURN_POKEMON:{
            return{
                ...state,pokemon: state.pokemon+ action.payload
            }
        }   
            
    
        default: return state;
            
    }
}
export default gameShop;