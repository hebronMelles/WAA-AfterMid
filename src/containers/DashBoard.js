import { useState } from "react";
import Posts from "./Posts";
import PostDetails from "./PostDetails";

const DashBoard = () => {
  const [id, setId] = useState();
  const [visible, setVisible] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const [postState, setPostsState] = useState([
    {
      id: 111,
      title: "Happiness",
      author: "John",
      content:
        "The sun sets, painting the sky in hues of orange and pink, casting a warm glow over the horizon",
    },
    {
      id: 112,
      title: "MIU",
      author: "Dean",
      content:
        "A quiet forest, where the rustle of leaves and the gentle chirping of birds create a peaceful symphony of nature",
    },
    {
      id: 113,
      title: "Enjoy Life",
      author: "Jasmine",
      content:
        "The city lights twinkle like stars, reflecting on the bustling streets below, as the night unfolds its enchanting embrace",
    },
  ]);
  const changeButtonHandler = () => {
    const input = document.getElementById("titleInput").value;
    const post = [...postState];
    post[0].title = input;
    setPostsState(post);
  };

  const detailButtonHandler = () => {
    const idInput = document.getElementById("IdInput").value;
    setId(parseInt(idInput));
    setVisible(true);
  };

  const deleteButtonHandler = () => {
    const idTobeDeleted = document.getElementById("idDeleteInput").value;
    const post = [...postState];
    const index = post.findIndex((x) => x.id === parseInt(idTobeDeleted));
    post.splice(index, 1);
    setPostsState(post);
  };

  const addPostHandler = () => {
    setShowContent(true);
  };
  const addPostSubmitHandler = () => {
    const id = parseInt(document.getElementById("IdAddInput").value);
    const title = document.getElementById("titleAddInput").value;
    const author = document.getElementById("authorAddInput").value;
    const content = document.getElementById("contentAddInput").value;

    const postStateTemp = [...postState];
    postStateTemp.push({ id, title, author, content });
    setPostsState(postStateTemp);
    setShowContent(false);

    return;
  };
  return (
    <>
      <Posts postState={postState}></Posts>
      <input type="text" id="titleInput"></input>
      <br></br>
      <button onClick={changeButtonHandler}>Change Title</button>
      <br></br>
      <br></br>
      <input
        type="text"
        id="IdInput"
        placeholder="Enter Id to see details"
      ></input>
      <br></br>

      <button
        onClick={() => {
          detailButtonHandler();
          console.log(id);
        }}
      >
        Show details
      </button>
      <br></br>
      <br></br>
      {showContent && (
        <div>
          {" "}
          <input type="text" id="IdAddInput" placeholder="Enter Id"></input>
          <br></br>
          <input
            type="text"
            id="titleAddInput"
            placeholder="Enter title"
          ></input>
          <br></br>
          <input
            type="text"
            id="authorAddInput"
            placeholder="Enter author"
          ></input>
          <br></br>
          <input
            type="text"
            id="contentAddInput"
            placeholder="Type content"
          ></input>
          <br></br>
          <button onClick={addPostSubmitHandler}>Submit</button>
        </div>
      )}
      {!showContent && <button onClick={addPostHandler}>Add Post</button>}

      {postState && <PostDetails postState={postState} id={id}></PostDetails>}
      <br />
      <br />

      {visible && (
        <div class="d-grid gap-2 col-6 mx-auto">
          <input
            type="text"
            id="idDeleteInput"
            placeholder="Enter Id to delete post"
          ></input>
          <button class="btn btn-primary" type="button">
            Edit
          </button>
          <button
            class="btn btn-primary"
            type="button"
            onClick={deleteButtonHandler}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
};

export default DashBoard;
