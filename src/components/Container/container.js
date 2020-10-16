import React from "react";
import MemeInfo from "../memeInfo/memeinfo";
import MemeList from "../Container/memeList";
import { Switch, Route } from "react-router-dom";

import "./container.scss";

const Container = ({ memes, setFavorite, memesfavs }) => {
  //   const [isLike, setLike] = useState(false);

  return (
    <div className="container">
      <div className="content"></div>

      <Switch>
        <Route exact path="/">
          <MemeList memes={memes} />
        </Route>
        <Route exact path="/favmemes">
          <MemeList memes={memesfavs} />
        </Route>
        <Route
          path="/:memeid"
          component={(props) => {
            return <MemeInfo memeid={props.match.params.memeid} memes={memes} setFavorite={setFavorite} />;
          }}
        ></Route>
      </Switch>
    </div>
  );
};

export default Container;
