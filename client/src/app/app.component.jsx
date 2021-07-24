import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout } from '../layout';
import { HomePage, TranslationPage } from '../pages';

import { useStore } from '../hooks';

const App = () => {
  const { userStore } = useStore();

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      userStore.checkAuth();
    }
  }, [userStore]);

  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/stream/:username">
          <TranslationPage />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
