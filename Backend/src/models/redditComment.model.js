const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const RedditComment = sequelize.define("redditComment", {
      name: {type: Sequelize.STRING},
      email: {type: Sequelize.STRING},
    });
    return RedditComment;
  };

/*const redditComment = new Pool({
    id: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    score: { type: Number, required: true },
    subreddit: { type: String, required: true },
    post: { type: String, required: true },

});

export default mongoose.model('redditcomments', redditComment);*/