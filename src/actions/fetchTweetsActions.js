export const fetchTweetsInit = () => ({
  type: 'FETCH_TWEETS_INIT'
});

export const fetchTweetsSuccess = (tweets) => ({
  type: 'FETCH_TWEETS_SUCCESS',
  payload: tweets
});

export const fetchTweetsFailure = (error) => ({
  type: 'FETCH_TWEETS_FAILURE'
});