import React from "react";

const Post = (props) => {
  const { post, deletePost } = props;

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
