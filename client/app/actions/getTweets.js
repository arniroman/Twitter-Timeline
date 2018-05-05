import {
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_FAILURE
} from "../consts/actionTypes";

export const getTweets = data => {
  return {
    type: FETCH_TWEETS_SUCCESS,
    payload: data
  };
};

export const getFailure = data => {
  return {
    type: FETCH_TWEETS_FAILURE,
    payload: data
  };
};
