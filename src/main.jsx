import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import rootReducer from './redux/main';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);