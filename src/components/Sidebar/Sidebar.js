import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = ( ) => {
  // const showFavorite = () => {
  //     if (isLiked === true) {
  //       const favoriteMemes = memes.filter((meme) => meme.liked);
  //     }
  // }


  return (
    <div className="sidebar">
      <div className="sidelist">
        <Link to="/">
          <button className="sidebtn">all memes</button>
        </Link>
        <Link to="/favmemes">
          <button className="sidebtn"  >favorite memes</button>
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
