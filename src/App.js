import React, { useState } from "react";
import MEMES_INFO from "./components/memes/memes";
import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/container";

import "./App.scss";

function App() {
  const [memes, setMemes] = useState(MEMES_INFO);
  const [favmemes, setFavMemes] = useState([])


  const setFavorite = (meme) => {
  let memefavs = [];
  let handler = [...memes]
  console.log(meme)
  handler =handler.map((item) => {
    console.log(item.id === meme.id )
     if(item.id === meme.id ){
       item = { ...item, isLiked: !item.isLiked } 
     }
      return item;
    });
    memefavs = handler.filter((item)=>item.isLiked)
    console.log(handler,memefavs)
    setMemes(handler)
    setFavMemes(memefavs)
  };
  // memes.map((meme) => {
  //   console.log(123, id)
  //   if (meme.id === id) {
  //     meme.isLiked = !meme.isLiked;
  //     return meme;
  //   }

  //   else return meme;
  // });
  return (
    <div className="App">
      <div className="forms-position">
        <Sidebar />
        <Container memesfavs={favmemes} memes={memes} setFavorite={setFavorite} />
      </div>
    </div>
  );
}

export default App;
