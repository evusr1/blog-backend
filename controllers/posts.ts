import { Router } from 'express';

const postsRouter = Router();

postsRouter.get('/', (_req, res) => {
    return res.status(404).send('posts');
});

postsRouter.post('/', (_req, res) => {
    return res.status(404);
});

postsRouter.get('/:id', (_req, res) => {
    return res.status(404);
});

export default postsRouter;