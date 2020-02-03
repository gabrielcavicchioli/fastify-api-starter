const service = require('./service')
const successResponse = require('../../helper/successResponse')
const errorResponse = require('../../helper/errorResponse')

module.exports = fastify => async (req, res) => {
  // try {
  //   const establishment = req.body
  //   const savedEstablishment = service.save(establishment)
  //   return successResponse(savedEstablishment, 'Estabelecimento criado com sucesso !')
  // } catch (e) {
    // const errors = [{
    //   type: 'error',
    //   field: null,
    //   message: 'Erro ao criar o estabelecimento'
    // }]
    // return errorResponse()
  // }
}
