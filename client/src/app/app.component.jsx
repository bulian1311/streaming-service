import React from "react";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Layout } from "../layout";
import { HomePage } from "../pages";

//import { useStore } from '../hooks';

const App = () => {
  // const { userStore } = useStore();

  // React.useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     userStore.checkAuth();
  //   }
  // }, [store]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default observer(App);
