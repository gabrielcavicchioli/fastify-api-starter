const service = require('../service')
const successResponse = require('../../../helper/successResponse')
const errorResponse = require('../../../helper/errorResponse')

module.exports = async (req, res) => {
  const id = req.params.id
  const example = await service.findById(id)
  return successResponse(example, 'sucesso')
}
