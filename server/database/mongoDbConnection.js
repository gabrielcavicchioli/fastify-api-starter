const mongoose = require('mongoose')
const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_DB
} = process.env
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000
}

module.exports = config => {
  const url = MONGO_HOSTNAME !== 'localhost'
    ? `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`
    : `mongodb://localhost:27017/${MONGO_DB}`

  mongoose.connect(url, options)
  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'connection error'))
  db.once('open', () => console.log('Connected to the database'))
}
