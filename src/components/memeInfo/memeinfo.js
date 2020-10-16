import React, { useState } from "react";

import "./memeinfo.scss";

export default function MemeInfo({ memeid, memes, setFavorite }) {
  const meme = memes.find((item) => item.id === memeid);

  // const showFavorite = () => {
  //   const favmemes = memes.filter((meme) => meme.isLiked===true)
  //         console.log(favmemes)
  //   }
console.log(meme.isLiked)
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
        <img src={meme.img} alt="img " className="img-info" />
      </div>
    </div>
  );
}

/* <button className="liked" onClick={() => {meme.isLiked = !meme.isLiked}}>{!meme.isLiked ? <img className="notLiked" alt="like" src="images/star.png"/> : <img className="notLiked" alt="like" src="images/starliked.png"/>}</button> */
