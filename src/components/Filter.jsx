import React, { useState } from "react";

const Filter = (props) => {
  const { setFilterForName } = props;
  const [inputFilter, setInputFilter] = useState("");

  const findForName = (e) => {
    e.preventDefault();
    setFilterForName(inputFilter);
  };
  return (
    <div>
      <form onSubmit={findForName}>
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              name="filterForName"
              value={inputFilter}
              placeholder="Filtrar por Nombre"
              onChange={(event) => setInputFilter(event.target.value)}
              className="w-50"
            />
          </div>
          <div className="col-3 text-end">
            <input
              type="submit"
              value="Buscar"
              className="btn btn-success w-50"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Filter;
