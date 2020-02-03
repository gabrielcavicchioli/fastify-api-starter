const tokenMiddleware = require('../../middleware/tokenMiddleware')

module.exports = async (fastify, options) => {
  fastify.get('/', {preHandler: tokenMiddleware}, require('./findAll')(fastify))
  fastify.get('/:id', {preHandler: tokenMiddleware}, require('./findById')(fastify))
  fastify.post('/', {preHandler: tokenMiddleware}, require('./create')(fastify))
}
