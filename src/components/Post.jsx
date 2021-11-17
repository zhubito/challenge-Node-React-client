import React from "react";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../redux/postDucks";

const Post = (props) => {
  const { post } = props;

  const dispatch = useDispatch();

  const deletePost = (id) => {
    dispatch(deletePostAction(id));
  };

  return (
    <div className="row border-bottom">
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
  );
};

export default Post;
