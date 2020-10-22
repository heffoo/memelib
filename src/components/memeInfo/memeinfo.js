import React from "react";
import { Link } from "react-router-dom";


import "./memeinfo.scss";

export default function MemeInfo({ memeid, memes, setFavorite }) {
  let currentPage;
  const meme = memes.find((item, index) => {
    if (item.id === memeid) {
      currentPage = index;

      return true;
    }

  })
  return (
    <div className="memeinfo">
      <div className="show-meme-inormation">
        <div className="textInfo">
          <button className="liked" onClick={() => setFavorite(meme)}>
            <img className="notLiked" alt="like" src={!meme.isLiked ? "images/star.png" : "images/starliked.png"} />
          </button>
          <p>Название мема: {meme.name} </p> <br />
          <p>Год появления: {meme.year} </p> <br />
          <p>Биография: {meme.info} </p>
          <br />
        </div>
        <img src={meme.url} alt="img " className="img-info" />{" "}
        <Link className="arrow1" to={`/${currentPage === 0 ? memes[memes.length - 1].id : memes[currentPage - 1].id}`}>
          ←
        </Link>
        <Link className="arrow2" to={`/${currentPage === memes.length - 1 ? memes[0].id : memes[currentPage + 1].id}`}>
          →
        </Link>
      </div>
    </div>
  );
}

/* <button className="liked" onClick={() => {meme.isLiked = !meme.isLiked}}>{!meme.isLiked ? <img className="notLiked" alt="like" src="images/star.png"/> : <img className="notLiked" alt="like" src="images/starliked.png"/>}</button> */
