const {Router, Request, Response} = require ('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Ty Bird');
})

module.exports = router;