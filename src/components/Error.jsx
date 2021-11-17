import React from "react";
import { useSelector } from "react-redux";

const Error = () => {
  const error = useSelector((state) => state.post.error);
  return error ? (
    <div className="bg-danger text-center text-white mt-3 rounded">{error}</div>
  ) : null;
};

export default Error;
