import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'App';
import { newStore, StoreProvider, gameDificulty } from 'services/Store';

newStore({ gameDificulty });

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
