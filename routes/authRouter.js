const aksExpress = require('express');
const aksAuthController = require('../api/auth');
const aksRouter = aksExpress.Router();

aksRouter.post('/save-user', aksAuthController.saveUser);
aksRouter.post('/login', aksAuthController.saveUser);
module.exports = aksRouter;