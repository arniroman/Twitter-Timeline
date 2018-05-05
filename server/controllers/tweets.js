const OAuth = require("oauth");
const Consumer_key = "DjN9J5Xl5ngfx5lRaRYjk5QUB";
const Consumer_secret = "pII12MOBkbnOp2jaX71uJ0ptWRZbjoiVi6iHN0CuCNWghG7k2F";
const Access_token = "992471045385965568-A9gX3HJilyWKHIcVombcqgQoYz7hLi8";
const Access_token_secret = "nTHXBuauxY0rxToUGfFW8Ejr1rdT0Acg8hoNHor9lMwOw";

module.exports = {
  fetchTweets: (req, res) => {
    const oauth = new OAuth.OAuth(
      "https://api.twitter.com/oauth/request_token",
      "https://api.twitter.com/oauth/access_token",
      Consumer_key,
      Consumer_secret, 
      "1.0A",
      null,
      "HMAC-SHA1"
    );

    let screen_name = req.body.data;
    oauth.get(
      "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" +
        screen_name +
        "&count=100",
      Access_token, 
      Access_token_secret, 
      (e, data, result) => {
        if (e) console.error(e);
        res.send(data);
        console.log(JSON.parse(data));
      }
    );
  }
};
