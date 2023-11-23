import express from 'express';
import loginRouter from './controllers/login';
import commentsRouter from './controllers/comments';
import postsRouter from './controllers/posts';
import usersRouter from './controllers/users';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/login', loginRouter);
app.use('/comments', commentsRouter);
app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});