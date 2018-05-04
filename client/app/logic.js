import axios from "axios";
import getTwitts from "./actions/getTwitts";

export const fetchAllTwitts = data => dispatch => {
  axios.post("/twitts", { data }).then(response => {
    dispatch(getTwitts(response.data));
  });
};
