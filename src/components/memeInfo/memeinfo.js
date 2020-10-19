import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./memeinfo.scss";

export default function MemeInfo({ memeid, memes, setFavorite }) {
  let memeIndex;
  const meme = memes.find((item, index) => {
    if (item.id === memeid) {
      memeIndex = index;

      return true;
    }

  });

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
        <Link className="arrow1" to={`/${memeIndex === 0 ? memes[memes.length - 1].id : memes[memeIndex - 1].id}`}>
          ←
        </Link> 
        <Link className="arrow2" to={`/${memeIndex === memes.length - 1 ? memes[0].id : memes[memeIndex + 1].id}`}>
          →
        </Link>
      </div>
    </div>
  );
}

/* <button className="liked" onClick={() => {meme.isLiked = !meme.isLiked}}>{!meme.isLiked ? <img className="notLiked" alt="like" src="images/star.png"/> : <img className="notLiked" alt="like" src="images/starliked.png"/>}</button> */
