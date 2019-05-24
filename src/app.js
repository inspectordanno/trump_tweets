import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', amount: 109500 }));

const state = store.getState();

const jsx = (
  <Provider store={store}>
    
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));