// implement your server here
// require your posts router and connect it here
const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
    res.send('Welcome to the API');
})

module.exports = router;

