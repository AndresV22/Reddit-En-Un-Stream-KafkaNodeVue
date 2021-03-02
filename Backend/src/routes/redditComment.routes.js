import express from 'express';
import controller from '../controllers/redditComment.controller';

const router = express.Router();

/*Defines the controller method for each sessionSettings CRUD operation.*/

router.get('/reddit-comments', controller.getAllRedditComment);
router.get('/reddit-comment/:id', controller.getRedditComment);
router.post('/reddit-comment', controller.createRedditComment);
router.put('/reddit-comment/:id', controller.updateRedditComment);
router.delete('/reddit-comment/:id', controller.deleteRedditComment);

/*Exports the five routes defined.*/
export default router;