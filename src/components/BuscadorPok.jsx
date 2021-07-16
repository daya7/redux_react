import React, { useState } from "react";
import { useDispatch } from "react-redux";
import fetchPok from "../redux/actions/buscadorAction";

const BuscadorPok = () => {
  const dispatch = useDispatch();
  const [pokeName, setPokeName] = useState("mewtwo");
  return (
    <div classname="form-group">
      <label htmlFor="lookFor_pok" className="text-white">
        Look for a Pokemon
      </label>
      <input
        type="text"
        className="form-control"
        id="lookFor_pok"
        value={pokeName}
        onChange={(e) => {
          setPokeName(e.target.value);
        }}
      />
      <button
        className="btn btn-primary mt-3"
        onClick={() => dispatch(fetchPok(pokeName))}
      >
        Send
      </button>
    </div>
  );
};

export default BuscadorPok;
