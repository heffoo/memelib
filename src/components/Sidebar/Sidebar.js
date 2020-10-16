import React from "react";
import { NavLink } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = () => {
  // const showFavorite = () => {
  //     if (isLiked === true) {
  //       const favoriteMemes = memes.filter((meme) => meme.liked);
  //     }
  // }

  return (
    <div className="sidebar">
      <div className="sidelist">
      <button className="sidebtn"> <NavLink className="navlink" exact to="/"  activeClassName="active">
          all memes
        </NavLink></button> 
        <button className="sidebtn">  <NavLink className="navlink" to="/favmemes"  activeClassName="active">
          favorite memes
        </NavLink></button>  
      </div>
    </div>
  );
};
export default Sidebar;
