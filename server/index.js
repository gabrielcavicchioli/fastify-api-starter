const fastify = require('fastify')({ logger: true })
const fastifyCors = require('fastify-cors')
const registerRoutes = require('./registerRoutes')
const registerTokenMiddleware = require('../middleware/tokenMiddleware')
const mongoDbConnection = require('../server/database/mongoDbConnection')

module.exports = async () => {
  try {
    fastify.register(require('fastify-multipart'), { attachFieldsToBody: true })
    registerTokenMiddleware(fastify)
    registerRoutes(fastify)
    mongoDbConnection()
    fastify.register(require('fastify-jwt'), { secret: process.env.API_SECRET })
    fastify.register(fastifyCors, {})
    await fastify.listen(process.env.PORT || 3000, '0.0.0.0')
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
