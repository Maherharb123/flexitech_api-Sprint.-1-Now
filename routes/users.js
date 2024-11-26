import express from 'express';
const router = express.Router()
import { prismaClient } from '../index.js';
import { hashSync, compareSync } from 'bcrypt';

router.post('/signup',async (req, res) => {
    const {email, password, name} = req.body;

    let user = await prismaClient.user.findFirst({where: {email}});

    if (user) {
        throw Error('User already exists!');
    } 
    user = await prismaClient.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10)
        }
    });
    res.json(user);
});

router.post('/login',async (req, res) => {
    
    const {email, password} = req.body;

    let user = await prismaClient.user.findFirst({where: {email}});
    if (!user) {
        throw Error('User does not exist');
    }
    if(!compareSync(password, user.password)) {
        throw Error('Incorrect password!');
    } else {
        res.send(`User ${user.email} logged in successfully!`);
    }
});

router.get('/logout', (req, res) => {
    res.send('Logout page')
});

router.get('/getSession', (req, res) => {
    res.send('Get user session')
});

export default router;
