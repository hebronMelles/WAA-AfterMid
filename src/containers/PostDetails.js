import React from "react";

const PostDetails = ({ postState, id }) => {
  const post = postState
    .filter((x) => x.id === id)
    .map((y) => {
      return (
        <div className="container text-center">
          <div class="p-2">{y.tittle}</div>
          <div class="p-2">{y.author}</div>
          <div>This is the content in the post…</div>
          <p>{y.content}</p>
        </div>
      );
    });
  return post;
};

export default PostDetails;
