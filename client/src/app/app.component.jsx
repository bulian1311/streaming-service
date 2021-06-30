import React from "react";
import {observer} from 'mobx-react-lite'

import { LoginForm } from '../components/login-form/login-form.component';
import {Context} from '../'

const App = () => {
  const { store } = React.useContext(Context);

  React.useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth();
    }
  }, []);

  return (<div>
    <h1>{store.isAuth ? "AUTH TRUE": "AUTH FALSE"}</h1>
    <LoginForm />
    </div>);
};

export default observer(App);
