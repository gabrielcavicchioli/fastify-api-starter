const model = require('./model')

const findAll = () => model.find()

const findById = id => model.findById(id).exec()

const save = object => {
  const example = new model(object)
  return example.save()
}

const update = async object => {
  await model.updateOne({ _id: object._id }, { $set: object } )
  const updated = await findById(object._id)
  return updated
}

module.exports = {
  findAll,
  findById,
  save,
  update
}
