const OAuth = require("oauth");
const Consumer_key = "DjN9J5Xl5ngfx5lRaRYjk5QUB";
const Consumer_secret = "pII12MOBkbnOp2jaX71uJ0ptWRZbjoiVi6iHN0CuCNWghG7k2F";
const Access_token = "992471045385965568-A9gX3HJilyWKHIcVombcqgQoYz7hLi8";
const Access_token_secret = "nTHXBuauxY0rxToUGfFW8Ejr1rdT0Acg8hoNHor9lMwOw";
const countUsers = 10;
let screen_name;

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

    screen_name = req.body.data || "default";
    oauth.get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name= ${screen_name} &count=${countUsers}`,
      Access_token,
      Access_token_secret,
      (err, data, result) => {
        if (err) {
          console.log(err,'err');
          res.status(401).send({
            error: err,
            message: "user not found"
          });
        } else {
          res.send(data);
          console.log(data);
        }
      }
    );
  }
};
