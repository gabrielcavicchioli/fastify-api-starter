const service = require('../service')
const successResponse = require('../../../helper/successResponse')
const errorResponse = require('../../../helper/errorResponse')

module.exports = async (req, res) => {
  try {
    const savedExample = await service.save(req.body)
    return successResponse(savedExample, 'Example created !')
  } catch (errors) {
    return errorResponse({ res, errors })
  }
}
