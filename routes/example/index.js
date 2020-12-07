module.exports = async (fastify, options) => {
  // fastify.get('/', { preValidation: fastify.authenticate }, require('./findAll')(fastify)) // rota autenticada
  fastify.get('/', require('./findAll')(fastify))
  fastify.get('/:id', require('./findById')(fastify))
  fastify.post('/', require('./create')(fastify))
  fastify.put('/', require('./update')(fastify))
}
