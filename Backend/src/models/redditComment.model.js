const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const RedditComment = sequelize.define("comentario", {
      post_id: { type: Sequelize.STRING(128) },
      author: { type: Sequelize.STRING(128) },
      comentario: { type: Sequelize.TEXT },
      score: { type: Sequelize.INTEGER },
      total_palabras: { type: Sequelize.TEXT },
      num_voca: { type: Sequelize.INTEGER },
      num_cons: { type: Sequelize.INTEGER},
      num_mayus: { type: Sequelize.INTEGER },
      num_minus: { type: Sequelize.INTEGER },
      num_palabras_sin_sw: { type: Sequelize.INTEGER},
      num_sw: { type: Sequelize.INTEGER },
      idioma: { type: Sequelize.STRING(128)},
      subreddit: { type: Sequelize.TEXT},
      post: { type: Sequelize.TEXT },
    });
    return RedditComment;
  };

/*
const redditComment = new Pool({
    id: { type: Sequelize.STRING(128) },
    author: { type: Sequelize.STRING(128) },
    comentario: { type: Sequelize.TEXT},
    score: { type: Sequelize.INTEGER },
    total_palabras: { type: Sequelize.TEXT },
    num_voca: { type: Sequelize.INTEGER},
    num_cons: { type: Sequelize.INTEGER},
    num_mayus: { type: Sequelize.INTEGER },
    num_minus: { type: Sequelize.INTEGER },
    num_palabras_sin_SW: { type: Sequelize.INTEGER},
    num_SW: { type: Sequelize.INTEGER },
    idioma: { type: Sequelize.STRING(128)},
    subreddit: { type: Sequelize.TEXT},
    post: { type: Sequelize.TEXT },

});

export default mongoose.model('redditcomments', redditComment);*/