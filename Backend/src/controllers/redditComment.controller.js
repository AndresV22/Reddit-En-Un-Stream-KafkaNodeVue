
const db = require("../models");
const RedditComment = db.redditComment;
const Op = db.Sequelize.Op;
/*
Exports five methods for redditComment CRUD operations.
*/ 
export default{

  /*POST a  new redditComment given a request body PROBADO.*/    
  async createRedditComment(req, res){
    const redditComment = {
      id:  req.body.id,
      author: req.body.author,
      comentario: req.body.comentario,
      score: req.body.score,
      total_palabras: req.body.total_palabras,
      num_voca: req.body.num_voca,
      num_cons: req.body.num_cons,
      num_mayus: req.body.num_mayus,
      num_minus: req.body.num_minus,
      num_palabras_sin_SW: req.body.num_palabras_sin_SW,
      num_SW: req.body.num_SW,
      idioma: req.body.idioma,
      subreddit: req.body.subreddit,
      post: req.body.post,
    }
    console.log(redditComment)
    
    await RedditComment.create(redditComment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while create the Reddit Comment",
      });
    });
  },

  /*GET all redditComment. PROBADO*/     
  async getAllRedditComment(req, res){
    await RedditComment.findAll({
      attributes: { exclude: ['createdAt','updatedAt'] }
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving Reddit Comments",
      });
    })
  },
  /*Get a redditComment given the id. PROBADO*/        
  async getRedditComment(req, res){
      const id = req.params.id;
      await RedditComment.findByPk(id)
      .then((data) => {
          res.send(data);
      })
      .catch((err) => {
          res.status(500).send({
              message: "Error retrieving Reddit Comment with id=" + id,
          });
      })
  },
  /* Está req.query, req.body*/
  /*Get a redditComment given the name, si no está retorna null ojo. PROBADO*/        
  async getByNameRedditComment(req, res){
    const name = req.query.name;
    console.log(name)
    await RedditComment.findOne({
      where: {
        name:name
      }
    })
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Reddit Comment with name=" + name,
        });
    })
},
  /*UPDATE a redditComment given the id and a request body. PROBADO*/    
  async updateRedditComment(req, res){
    const id = req.params.id;
    
    await RedditComment.update(req.body, {
      where: {id:id},
    }).then((data) => {
      if (data) {
        res.send({
          message: "Reddit Comment was updated successfully",
        });
      } else {
        res.send({
          message: `Cannot update Reddit Comment with id=${id}`,
        });
      }
    });
  },

  /*DELETE a RedditComment given the id. PROBADO*/    
  async deleteRedditComment(req, res){
    const id = req.params.id;
    console.log('Entra aqui al delete')
    console.log(id)
    await RedditComment.destroy({
      where: {id:id}
    }).then((data) =>{
      if (data) {
        res.send({
          message: "Reddit Comment was delete successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Reddit Comment with id=${id}`,
        });
      }
    });
  },
}