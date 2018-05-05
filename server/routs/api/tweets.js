const router = require("express").Router();
const controllers = require("../../controllers/tweets");

router.get("/", (req, res) => {
    controllers.fetchTweets(req,res)
});

module.exports = router;
