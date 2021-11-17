import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { changeFilterAction } from "../redux/postDucks";

const Filter = () => {
  const [inputFilter, setInputFilter] = useState("");

  const dispatch = useDispatch();

  const setFilter = () => {
    dispatch(changeFilterAction(inputFilter));
  };

  const handleChangeFilter = (event) => setInputFilter(event.target.value);

  return (
    <div className="row">
      <div className="col-9">
        <input
          type="text"
          name="filterForName"
          value={inputFilter}
          placeholder="Filtrar por Nombre"
          onChange={handleChangeFilter}
          className="w-50"
        />
      </div>
      <div className="col-3 text-end">
        <input
          type="submit"
          value="Buscar"
          className="btn btn-success w-50"
          onClick={setFilter}
        />
      </div>
    </div>
  );
};

export default Filter;
