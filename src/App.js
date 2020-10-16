import React, { useState } from "react";
import MEMES_INFO from "./components/memes/memes";
import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/container";

import "./App.scss";

function App() {
  const [memes, setMemes] = useState(JSON.parse(localStorage.getItem('data'))|| MEMES_INFO);
  const [favmemes, setFavMemes] = useState((JSON.parse(localStorage.getItem('data'))||[]).filter((item) => item.isLiked));

  const setFavorite = (meme) => {
    let memefavs = [];
    let handler = [...memes];
    handler = handler.map((item) => {
      if (item.id === meme.id) {
        item = { ...item, isLiked: !item.isLiked };
      }
      return item;
    });
    memefavs = handler.filter((item) => item.isLiked);

    console.log(2222, handler);
    console.log(1221, memefavs);

    setMemes(handler);
    setFavMemes(memefavs);
    localStorage.setItem("data", JSON.stringify(handler));
    console.log(localStorage);
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
