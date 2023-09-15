const routes = require('express').Router()

const myController = require('../controllers')

routes.get('/', myController.getPerson)
routes.get('/awesome', myController.getAnotherPerson)

module.exports = routes