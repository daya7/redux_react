import React from 'react';
import { useSelector } from 'react-redux';


const CantHook = () => {

    const gameShop =useSelector((state)=>state.gameShop )
    return (
        <>
            Unidades :{gameShop.pokemon}
        </>

    )
}


export default  CantHook;
