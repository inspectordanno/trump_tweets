import React, { useEffect } from 'react';
import tweets from '../../trump_r/tweets_cleaned.json';
import { useDispatch } from 'react-redux';

const TrumpApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {  
    let didCancel = false;
    
    const fetchData = () => {
      dispatch({ type: 'FETCH_TWEETS_INIT' });
      try {
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
    <h1>hello world</h1>
  );
}

export default TrumpApp;