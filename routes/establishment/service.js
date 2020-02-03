const establishmentModel = require('./model')

const service = {
  findAll: () => establishmentModel.find(),
  findById: id => establishmentModel.findById(id).exec(),
  save: object => {
    const establishment = new establishmentModel(object)
    return establishment.save()
  }
}

module.exports = service
