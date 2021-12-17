const express = require('express');
const router = express.Router();

const userRouter = require('./user.route');
const produkRouter = require('./produk.route');

router.use('/user', userRouter);
router.use('/produk', produkRouter);

module.exports = router;
