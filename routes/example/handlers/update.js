const service = require('../service')
const successResponse = require('../../../helper/successResponse')
const errorResponse = require('../../../helper/errorResponse')

module.exports = async (req, res) => {
  try {
    const updatedExample = await service.update(req.body)
    return successResponse(updatedExample, 'Example updated !')
  } catch (errors) {
    return errorResponse({ res, errors })
  }
}
