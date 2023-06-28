import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import almacenamiento from "./store/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={almacenamiento}> 
    <App />
    </Provider>
  </React.StrictMode>
);  
