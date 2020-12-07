const service = require('./service')
const successResponse = require('../../helper/successResponse')
const errorResponse = require('../../helper/errorResponse')

module.exports = fastify => async (req, res) => {
  const id = req.params.id
  const establishment = await service.findById(id)
  return successResponse(establishment, 'sucesso')
}
