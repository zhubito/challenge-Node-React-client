import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getPostAction } from "../redux/postDucks";
import Post from "./Post";

const HeadGrid = () => {
  return (
    <div className="row bg-primary text-white text-center">
      <div className="col-md-4 p-2">Nombre</div>
      <div className="col-md-4 p-2">Descripción</div>
      <div className="col-md-4 p-2">Acción</div>
    </div>
  );
};

const Grid = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAction());
  }, [dispatch]);

  const posts = useSelector((store) => store.post.array);
  const filter = useSelector((store) => store.post.filter);

  return (
    <div className="container mt-4 border border-dark">
      <HeadGrid />
      {posts
        .sort((a, b) => b.id - a.id)
        .filter((post) =>
          post.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((post) => (
          <Post post={post} key={post.id} />
        ))}
    </div>
  );
};

export default Grid;
