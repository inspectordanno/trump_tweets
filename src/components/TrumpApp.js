import React, { useEffect, useReducer } from 'react';
import TrumpContext from '../context/trump_context';
import { csv } from 'd3-fetch';
import tweetsReducer from '../reducers/tweetsReducer';

const TrumpApp = () => {
  const [tweets, dispatch] = useReducer(tweetsReducer, {
    isLoading: false,
    isError: false,
    data: 'data not loaded'
  });

  useEffect(() => {  
    let didCancel = false;
    
    const fetchData = async () => {
      dispatch({ type: 'FETCH_TWEETS_INIT' });
      try {
        const tweets = await csv('../trump_r/tweets_cleaned.csv');
        if (!didCancel) {
          dispatch({ type: 'FETCH_TWEETS_SUCCESS', payload: tweets });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_TWEETS_FAILURE' });
        } 
      }
    }
    fetchData();

    return () => {
      didCancel = true;
    };

  }, []);

  return (
    <TrumpContext.Provider value={{ tweets, dispatch }}>
      <h1>Hello World</h1>
    </TrumpContext.Provider>
  );
}


export default TrumpApp;