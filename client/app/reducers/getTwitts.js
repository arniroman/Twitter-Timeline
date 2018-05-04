export default function getAllTwitts(state = [], action) {
  switch (action.type) {
    case "GET_ALL_TWITTS":
      return action.payload;
      break;
    default:
      return state;
  }
}
