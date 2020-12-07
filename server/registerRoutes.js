const { readdirSync } = require('fs')
const path = require('path')

module.exports = (fastify) => {
  fastify.register((instance, opts, next) => {
    fastify.get('/', (request, reply) => reply.send('API IS RUNNING!!!'))
    readdirSync(path.join(__dirname, '../routes')).forEach(folderName => {
      const fullPath = path.join(__dirname, '../routes', folderName)
      const module = require(fullPath)
      instance.register(module, { prefix: folderName })
      console.log(fullPath);
    })
    next()
  }, { prefix: '/api' })
}
