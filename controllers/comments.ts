import { Router } from 'express';

const commentsRouter = Router();

commentsRouter.get('/', (_req, res) => {
    return res.status(404).send('comments');
});

commentsRouter.post('/', (_req, res) => {
    return res.status(404);
});

export default commentsRouter;