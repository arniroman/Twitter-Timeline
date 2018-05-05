import axios from "axios";
import getTweets from "./actions/getTweets";

export const fetchAllTweets = data => dispatch => {
  axios.post("/tweets", { data }).then(response => {
    dispatch(getTweets(response.data));
  });
};
