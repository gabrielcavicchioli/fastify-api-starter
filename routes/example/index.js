module.exports = async (fastify, options) => {
  // fastify.get('/', { preValidation: fastify.authenticate }, require('./findAll')(fastify)) // rota autenticada
  fastify.get('/', require('./handlers/findAll'))
  fastify.get('/:id', require('./handlers/findById'))
  fastify.post('/', require('./handlers/create'))
  fastify.put('/:id', require('./handlers/update'))
}
