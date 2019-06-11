import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TrumpApp from './components/TrumpApp';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <TrumpApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));