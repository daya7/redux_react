import { combineReducers } from "redux";
import buscador from "./buscadorReducer.js";
import gameShop from './gameShopReducer.js';
const rootReducers = combineReducers({
    gameShop,
    buscador
});

export default rootReducers;
