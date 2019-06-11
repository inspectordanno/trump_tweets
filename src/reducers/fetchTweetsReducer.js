import moment from 'moment';

const fetchTweetsReducerDefaultState = {
  isLoading: false,
  isError: false,
  data: 'data not loaded'
};

const fetchTweetsReducer = (state = fetchTweetsReducerDefaultState, action) => {
  switch (action.type) {
    case 'FETCH_TWEETS_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_TWEETS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.map((tweet) => {
          return {
            ...tweet,
            moment: moment(tweet.created_at, 'ddd MMM DD HH:mm:ss Z YYYY')
          }
        })
      };
    case 'FETCH_TWEETS_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      // throw new Error();
      return state;
  }
}

export default fetchTweetsReducer;