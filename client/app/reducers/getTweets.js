import {
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_FAILURE
} from "../consts/actionTypes";

export default function getAllTwitts(state = null, action) {
  switch (action.type) {
    case FETCH_TWEETS_SUCCESS:
      return action.payload;
      break;
    case FETCH_TWEETS_FAILURE:
      return action.payload;
      break;
    default:
      return state;
  }
}
