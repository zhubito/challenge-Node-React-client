import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { insertPostAction } from "../redux/postDucks";

const Form = () => {
  const dispatch = useDispatch();
  const [newPost, setNewPost] = useState({
    name: "",
    description: "",
  });

  const createNewPost = (e) => {
    e.preventDefault();
    //validación simple
    if (newPost.name === "" || newPost.description === "") {
      alert("Nombre y Descripción son obligatorios para un nuevo Post");
      return;
    }
    dispatch(insertPostAction(newPost));
    //limpiamos formulario
    setNewPost({
      name: "",
      description: "",
    });
  };

  return (
    <div className="mt-4">
      <form onSubmit={createNewPost}>
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              name="name"
              value={newPost.name}
              placeholder="Nombre"
              onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
              className="w-75"
            />
          </div>
          <div className="col-5">
            <input
              type="text"
              name="description"
              placeholder="Descripción"
              value={newPost.description}
              onChange={(e) =>
                setNewPost({ ...newPost, description: e.target.value })
              }
              className="w-100"
            />
          </div>
          <div className="col-3 text-end">
            <input
              type="submit"
              value="Crear"
              className="btn btn-success w-50"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
