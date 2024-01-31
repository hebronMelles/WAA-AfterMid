import { useState } from "react";
import Posts from "./Posts";


const DashBoard = () => {
  const [postState, setPostsState] = useState([
    { id: 111, tittle: "Happiness", author: "John" },
    { id: 112, tittle: "MIU", author: "Dean" },
    { id: 113, tittle: "Enjoy Life", author: "Jasmine" },
  ]);
  const buttonHandler = () => {
    const input = document.getElementById("titleInput").value;
    const post =  [...postState];
    post[0].tittle = input;
    setPostsState(post);
    
  };
  return (
    <>
      <Posts postState={postState}></Posts>

      <input type="text" id="titleInput"></input>
      <br></br>
      <br></br>

      <button onClick={buttonHandler}>Change Title</button>
    </>
  );
};

export default DashBoard;
