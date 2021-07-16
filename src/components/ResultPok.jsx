import React from 'react'
import { useSelector } from 'react-redux'


const ResultPok = () => {

    const buscador =useSelector((state)=>state.buscador) 
    return (
        <div>
            <h3 className="text-white">Result:</h3>
            {buscador.loading && <div className="text-warning">Searching...</div>}
          { buscador.pokemon.length>=1 &&  <div className="text-success">
               { <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" />}
                <span>{buscador.pokemon[0].name}</span>
            </div>}
            {buscador.error!== '' && <span className="text-danger">{buscador.error}</span>}
        </div>
    )
}

export default ResultPok
