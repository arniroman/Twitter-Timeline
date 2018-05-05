export default function getTweets (data) {
  return {
    type: "GET_ALL_TWITTS",
    payload: data
  };
}
