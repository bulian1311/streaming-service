import React from "react";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import LoginForm from "../components/login-form";
import LiveStreams from "../components/live-streams";
import VideoPlayer from "../components/video-player";
import Settings from "../components/settings";

import { Context } from "../";

const App = () => {
  const { store } = React.useContext(Context);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <LiveStreams />
      </Route>
      <Route exact path="/stream/:username">
        <VideoPlayer />
      </Route>
      <Route exact path="/settings">
        <Settings />
      </Route>

      <h1>{store.isAuth ? "AUTH TRUE" : "AUTH FALSE"}</h1>
      <LoginForm />
    </Switch>
  );
};

export default observer(App);
