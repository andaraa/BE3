const express = require('express');
const userRouter = express();

const userController = require('../controllers/userController');
// define the home page route
// playerRouter.get('/', function (req, res) {
//   res.send('student GET playerRouter');
// });

userRouter.post('/register', userController.createuser);
userRouter.post('/login', userController.userlogin);
// playerRouter.get('/', usercontroller.showAll);

// playerRouter.delete('/', function (req, res) {
//   res.send('student DELETE playerRouter');
// });

module.exports = userRouter;
