import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Sidebar.scss";

const Sidebar = ({ memes, randmeme, setRandMeme }) => {
  function randMeme() {
    if (!!randmeme) {
     
      randmeme = memes.filter((el) => el.id !== randmeme.id)[Math.floor(Math.random() * memes.length - 1) + 1];
    } else {
      randmeme = memes[Math.floor(Math.random() * memes.length) + 1];
    }

    setRandMeme(randmeme);
  
  }

  return (
    <div className="sidebar">
      <div className="sidelist">
        <button className="sidebtn">
          {" "}
          <NavLink className="navlink" exact to="/" activeClassName="active">
            all memes
          </NavLink>
        </button>
        <button className="sidebtn">
       
          <NavLink className="navlink" to="/favmemes" activeClassName="active">
            favorite memes
          </NavLink>
        </button>

        <button className="sidebtn" onClick={() => randMeme()}>
          <Link className="navlink" to={`/${!!randmeme ? randmeme.id : "LOL"}`}>
            gen a random meme
          </Link>
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
