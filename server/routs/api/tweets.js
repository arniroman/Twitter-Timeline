const router = require("express").Router();
const controllers = require("../../controllers/tweets");

router.post("/", (req, res) => {
  controllers.fetchTweets(req, res);
});

module.exports = router;
