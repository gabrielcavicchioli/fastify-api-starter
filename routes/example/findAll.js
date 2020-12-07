const service = require('./service')
const successResponse = require('../../helper/successResponse')
const errorResponse = require('../../helper/errorResponse')

module.exports = fastify => async (req, res) => {
  try {
    const data = await service.findAll()
    return successResponse(data, 'Success')
  } catch (e) {
    const errors = [{ message: 'Error' }]
    return errorResponse({ res, errors })
  }
}
