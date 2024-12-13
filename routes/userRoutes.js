const express = require('express');
const userRoute = express();

//middleware
const bodyParser = require('body-parser');
userRoute.use(bodyParser.json());
userRoute.use(bodyParser.urlencoded({ extended: true}) );

//controller
const userController = require('../controller/userController');

userRoute.get('/get-users', userController.getUser);

module.exports = userRoute;
