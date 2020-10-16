import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./memeinfo.scss";

export default function MemeInfo({ memeid, memes, setFavorite }) {
  let memeIndex;
  const meme = memes.find((item, index) => {
    if (item.id === memeid) {
      memeIndex = index;
   
    return true; } 
  });

  // const showFavorite = () => {
  //   const favmemes = memes.filter((meme) => meme.isLiked===true)
  //         console.log(favmemes)
  //   }
  console.log(meme.isLiked);
  return (
    <div className="memeinfo">
      <div className="show-meme-inormation">
        <div className="textInfo">
          <button className="liked" onClick={() => setFavorite(meme)}>
            {!meme.isLiked ? (
              <img className="notLiked" alt="like" src="images/star.png" />
            ) : (
              <img className="notLiked" alt="like" src="images/starliked.png" />
            )}
          </button>
          <p>Название мема: {meme.name} </p> <br />
          <p>Год появления: {meme.year} </p> <br />
          <p>Биография: {meme.info} </p>
          <br />
        </div>
        <img src={meme.img} alt="img " className="img-info" />{" "}
        <Link className="arrow1" to={`/${memes[memeIndex - 1].id}`}>
          ←
        </Link>
        <Link className="arrow2" to={`/${memes[memeIndex + 1].id}`}>
          →
        </Link>
      </div>
    </div>
  );
}

/* <button className="liked" onClick={() => {meme.isLiked = !meme.isLiked}}>{!meme.isLiked ? <img className="notLiked" alt="like" src="images/star.png"/> : <img className="notLiked" alt="like" src="images/starliked.png"/>}</button> */
