import React from "react";

// import MemeInfo from "../memeInfo/memeinfo";
import { Link } from "react-router-dom";
import "./container.scss";

export default function MemeList({ memes }) {
  return (
    <div className="list">
      {memes.map((meme) => (
          <li key={meme.id} className="meme-item">
            <Link className="tomeme-link" to={`/${meme.id}`}>
              <img className="memeimg" src={meme.url} alt={meme.name}></img>
              <p >{meme.name}</p>
            </Link>
          </li>
      ))}
    </div>
  );
}
