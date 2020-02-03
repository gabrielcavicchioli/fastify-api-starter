const mongoose = require('mongoose')

const establishmentSchema = new mongoose.Schema({
  cnpj: String,
  razaosocial: String,
  nomefantasia: String,
  telefones: { type: Array, default: [] },
  enderecos: { type: Array, default: [] },
  profissionais: [{ type: mongoose.Schema.Types.ObjectId, default: [] }]
})

module.exports = mongoose.model('Establishment', establishmentSchema)
