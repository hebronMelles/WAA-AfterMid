import Post from "../components/Posts/Post";

const Posts = (props) => {
  const post = props.postState.map((x) => {
    return (
      <>
        <div class="d-flex flex-column mb-3">
          <div class="p-2">id : {x.id}</div>
          <div class="p-2">title : {x.tittle}</div>
          <div class="p-2">author : {x.author}</div>
        </div>
      </>
    );
  });
  return post;
};

export default Posts;
