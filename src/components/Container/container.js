import React from "react";
import MemeInfo from "../memeInfo/memeinfo";
import MemeList from "../Container/memeList";
import { Switch, Route, Link } from "react-router-dom";

import "./container.scss";

const Container = ({ memes }) => {
  //   const [isLike, setLike] = useState(false);
  return (
    <div className="container">
      <div className="content"></div>

      <Switch>
        <Route exact path="/">
          <MemeList memes={memes} />
        </Route>

        <Route
          path="/:memeid"
          render={(...memes) => (
            // {console.log(memes)}
            <MemeInfo {...memes} />
          )}
        ></Route>
      </Switch>
    </div>
  );
};

export default Container;
