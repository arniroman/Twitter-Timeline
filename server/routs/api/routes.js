const tweets = require('./tweets') 
module.exports = function(app){
    app.use('/tweets',tweets)
}