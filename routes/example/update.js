const service = require('./service')
const successResponse = require('../../helper/successResponse')
const errorResponse = require('../../helper/errorResponse')

module.exports = fastify => async (req, res) => {
  try {
    const updatedExample = await service.update(req.body)
    return successResponse(updatedExample, 'Example updated !')
  } catch (e) {
    return errorResponse()
  }
}
