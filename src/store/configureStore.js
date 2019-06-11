import { createStore, combineReducers } from 'redux';
import fetchTweetsReducer from '../reducers/fetchTweetsReducer';

export default () => {
  const store = createStore(
    combineReducers({
      tweets: fetchTweetsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

