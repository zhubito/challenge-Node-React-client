import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPostAction, deletePostAction } from "../redux/postDucks";

const Grid = (props) => {
  const { filterForName } = props;

  const dispatch = useDispatch();
  const initialCharge = useSelector((store) => store.post.initial);

  if (initialCharge === true) {
    //Carga inicial
    dispatch(getPostAction());
  }
  const posts = useSelector((store) => store.post.array);

  const deletePost = (id) => {
    dispatch(deletePostAction(id));
  };

  return (
    <div className="container mt-4 border border-dark">
      <div className="row bg-primary text-white text-center">
        <div className="col-md-4 p-2">Nombre</div>
        <div className="col-md-4 p-2">Descripción</div>
        <div className="col-md-4 p-2">Acción</div>
      </div>
      {posts
        .sort((a, b) => b.id - a.id)
        .filter((post) =>
          post.name.toLowerCase().includes(filterForName.toLowerCase())
        )
        .map((post) => (
          <div className="row border-bottom" key={post.id}>
            <div className="col-md-4 p-2">{post.name}</div>
            <div className="col-md-4 p-2">{post.description}</div>
            <div className="col-md-4 p-1 text-center">
              <button
                className="btn btn-danger"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Grid;
