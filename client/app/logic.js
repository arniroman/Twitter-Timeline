import axios from "axios";
import { getTweets, getFailure } from "./actions/getTweets";

export const fetchAllTweets = data => dispatch => {
  axios
    .post("/tweets", { data })
    .then(response => {
      dispatch(getTweets(response.data));
    })
    .catch(err => {
      dispatch(
        getFailure({
          error: err,
          message: "User not found"
        })
      );
    });
};
