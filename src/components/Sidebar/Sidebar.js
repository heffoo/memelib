import React from "react";

import "./Sidebar.scss";



const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidelist">
        <button className="sidebtn">all memes</button>
        <button className="sidebtn">favorite memes</button>
      </div>
    </div>
  );
};
export default Sidebar;
