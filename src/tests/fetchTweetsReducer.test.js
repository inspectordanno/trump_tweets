import fetchTweetsReducer from '../reducers/fetchTweetsReducer';
import tweets from '../../trump_r/tweets_cleaned.json';

const fetchTweetsReducerDefaultState = {
  isLoading: false,
  isError: false,
  data: 'data not loaded'
};

test('should initialize data', () => {
  const action = {
    type: 'FETCH_TWEETS_INIT'
  }
  const state = fetchTweetsReducer(fetchTweetsReducerDefaultState, action);
  console.log(state);
});

test('data should succeed', async () => {
  const action = {
    type: 'FETCH_TWEETS_SUCCESS',
    payload: tweets
  }
  const state = fetchTweetsReducer(fetchTweetsReducerDefaultState, action);
  console.log(state.data);
  expect(state.data).toBeTruthy();
});

