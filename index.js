import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;

app.use(express.json());

// users
import users from './routes/users.js';
app.use('/users', users);

// products 
import products from './routes/products.js';
app.use('/products', products);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

export const prismaClient = new PrismaClient({
    log:['query']
});

app.listen(port, () => {
    console.log(`Server listening on http://127.0.0.1:${port}`);
});