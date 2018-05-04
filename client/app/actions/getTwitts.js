export default function getTwitts (data) {
  return {
    type: "GET_ALL_TWITTS",
    payload: data
  };
}
