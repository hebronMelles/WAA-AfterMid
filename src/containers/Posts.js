import Post from "../components/Posts/Post";

const Posts = (props) => {
  const post = props.postState.map((x) => {
    return (
      <>
        <div class="user-select-all">
          <div className="d-flex flex-column mb-4">
            <div class="p-2">id : {x.id}</div>
            <div class="p-2">title : {x.title}</div>
            <div class="p-2">author : {x.author}</div>
          </div>
        </div>
      </>
    );
  });
  return post;
};

export default Posts;
