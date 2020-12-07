const service = require('./service')
const successResponse = require('../../helper/successResponse')
const errorResponse = require('../../helper/errorResponse')

module.exports = fastify => async (req, res) => {
  try {
    const savedExample = await service.save(req.body)
    return successResponse(savedExample, 'Example created !')
  } catch (e) {
    console.log(e);
    return errorResponse()
  }
}
