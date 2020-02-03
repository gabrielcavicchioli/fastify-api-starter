const service = require('./service')
const successResponse = require('../../helper/successResponse')
const errorResponse = require('../../helper/errorResponse')

module.exports = fastify => async (req, res) => {
  const data = await service.findAll()
  return successResponse(data, 'Sucesso')
}
