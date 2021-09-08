const { readdirSync } = require('fs')
const path = require('path')

// se quiser ter o sufixo "api" depois do dominio, descomentar as linhas comentadas
module.exports = (fastify) => {
  fastify.register((instance, opts, next) => {
    fastify.get('/', (request, reply) => reply.send('API IS RUNNING!!!'))
    readdirSync(path.join(__dirname, '../routes')).forEach(folderName => {
      const fullPath = path.join(__dirname, '../routes', folderName)
      const module = require(fullPath)
      fastify.register(module, { prefix: folderName })
    })
    next()
  }, { prefix: '/api' })
}
