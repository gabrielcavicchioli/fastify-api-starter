const model = require('@models/example')

const findAll = () => {
  return model.find()
}

const findById = async id => {
  return await model.findById(id)
}

const save = async object => {
  const example = new model(object)
  return await example.save()
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
