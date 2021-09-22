import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app.component';
import reportWebVitals from './reportWebVitals';

import Store from './store';
import { GlobalStyle } from './global.styled';

const store = new Store();

export const Context = React.createContext(store);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Context.Provider value={store}>
        <App />
      </Context.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
