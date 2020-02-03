const registerRoutes = require('./helper/registerRoutes')
const startServer = require('./helper/startServer')
const config = require('./config')
const fastify = require('fastify')({logger: true})
const mongodbConnection = require('./mongoDbConnection')

fastify.register(require('fastify-jwt'), {secret: config.apiSecret})
fastify.register(require('fastify-cors'), {})

mongodbConnection(config)
registerRoutes(fastify)
startServer(fastify)
