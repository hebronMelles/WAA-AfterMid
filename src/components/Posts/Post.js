import React from "react";

const Post = (props) => {
  return (
    <div>
      <h2>id: {props.id} </h2>
      <h2> title: {props.title} </h2>
      <h2> author: {props.author} </h2>
    </div>
  );
};

export default Post;
