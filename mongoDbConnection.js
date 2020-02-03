module.exports = config => {
  const mongoose = require('mongoose')
  mongoose.connect(config.mongodbConnection.url, {
    useNewUrlParser: true
  })

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', function() {
    console.log('Connected to the database')
  })
}
