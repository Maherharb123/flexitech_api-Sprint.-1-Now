import express from 'express';
const router = express.Router()


router.get('/all', (req, res) => {
    res.send('All Products')
});

router.get('/purchase', (req, res) => {
    res.send('Purchase page')
});


router.get('/:id', (req, res) => {
    res.send('Get Product By Id')
});


export default router;
