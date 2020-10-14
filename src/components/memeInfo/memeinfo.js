import React from "react";

import MEMES_INFO from '../memes/memes'
import "./memeinfo.scss";

export default function MemeInfo({ memeid }) {
    const meme  = MEMES_INFO.find((item)=>item.id ===memeid)
  return (
    <div className="memeinfo">
      <div className="show-meme-inormation">{meme.name}<img src={meme.img}/></div>
    </div>
  );
}
