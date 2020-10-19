import React, { useState, useEffect } from "react";
import MEMES_INFO from "./components/memes/memes";
import Sidebar from "./components/Sidebar/Sidebar";
import Container from "./components/Container/container";

import "./App.scss";

function App() {
  const [memes, setMemes] = useState(JSON.parse(localStorage.getItem("data")) || []);
  const [favmemes, setFavMemes] = useState(
    (JSON.parse(localStorage.getItem("data")) || []).filter((item) => item.isLiked)
  );
  const [randmeme, setRandMeme] = useState(null);

  const setFavorite = (meme) => {
    let memefavs = [];
    let handler = memes;
    handler = handler.map((item) => {
      if (item.id === meme.id) {
        item = { ...item, isLiked: !item.isLiked };
      }
      return item;
    });
    memefavs = handler.filter((item) => item.isLiked);

    setMemes(handler);
    setFavMemes(memefavs);
    localStorage.setItem("data", JSON.stringify(handler));
  };
  useEffect(() => {
    getMemes();
  }, []);

  function getMemes() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        const fetchedMemes = res.data.memes.map((el) => (el = { ...el, isLiked: false, year: Math.random(1000) }));
        // let item =res.data.memes.find((item)=>item.id==='1')
        // item.
        fetchedMemes.forEach((el) => console.log(el.url));
        if (memes.length === 0) {
          setMemes([...fetchedMemes,...MEMES_INFO]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <div className="forms-position">
        <Sidebar memes={memes} randmeme={randmeme} setRandMeme={setRandMeme} />
        <Container memesfavs={favmemes} memes={memes} setFavorite={setFavorite} />
      </div>
    </div>
  );
}

export default App;
