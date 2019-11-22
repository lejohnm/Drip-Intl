
const express = require('express')
const userCtrl = require('../controllers')
const verifyToken = require('../auth').verifyToken

const usersRouter = new express.Router()

 usersRouter.route('/').get(userCtrl.index)

 usersRouter.route('/').post(userCtrl.create)
 
 usersRouter.post('/authenticate', userCtrl.authenticate)
 
//  usersRouter.use(verifyToken)

 usersRouter.route('/:id').get(userCtrl.show)
 
 usersRouter.route('/:id').patch(userCtrl.update)

 usersRouter.route('/:id').delete(userCtrl.destroy)

 module.exports = usersRouter