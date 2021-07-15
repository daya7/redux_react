import React from "react";
import { useDispatch } from "react-redux";

import {
  buy_pokemon_action,
  return_pokemon_action,
} from "../redux/actions/gameShopAction";

const CompHook = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        className="btn btn-dark btn-sm mx-5"
        onClick={() => {
          dispatch(buy_pokemon_action(1));
        }}
      >
        Buy Pokemon
      </button>
      <button
        className="btn btn-dark btn-sm"
        onClick={() => {
          dispatch(return_pokemon_action(1));
        }}
      >
        Return Pokemon
      </button>
    </>
  );
};

export default CompHook;
