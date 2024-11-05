import express from 'express'
import HomeController from '../controllers/HomeController'
let route = express.Router()
let initWebRoutes = (app) => {
    route.get('/', HomeController.getHomePage)
    route.post('/webhook', HomeController.postWebhook)
    route.get('/webhook', HomeController.getWebhook)
    return app.use("/", route)
}
module.exports = initWebRoutes;