import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  insertPostAction,
  changeFormNameAction,
  changeFormDescriptionAction,
} from "../redux/postDucks";

const Form = () => {
  const dispatch = useDispatch();

  const newPost = useSelector((state) => state.post.newPost);

  const createNewPost = (e) => {
    //validación simple
    if (!newPost.name || !newPost.description) {
      alert("Nombre y Descripción son obligatorios para un nuevo Post");
      return;
    }

    dispatch(insertPostAction(newPost));
  };

  const handlerName = (e) => dispatch(changeFormNameAction(e.target.value));
  const handlerDescription = (e) =>
    dispatch(changeFormDescriptionAction(e.target.value));

  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            name="name"
            value={newPost.name}
            placeholder="Nombre"
            onChange={handlerName}
            className="w-75"
          />
        </div>
        <div className="col-5">
          <input
            type="text"
            name="description"
            placeholder="Descripción"
            value={newPost.description}
            onChange={handlerDescription}
            className="w-100"
          />
        </div>
        <div className="col-3 text-end">
          <input
            type="button"
            value="Crear"
            className="btn btn-success w-50"
            onClick={createNewPost}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
