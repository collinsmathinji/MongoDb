const { MongoClient } = require('mongodb')
let url="mongodb+srv://machariacollins79:collins2005@cluster0.3ckylzc.mongodb.net/?retryWrites=true&w=majority"
let dbConnection

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(url)
      .then(client => {
        dbConnection = client.db()
        return cb()
      })
      .catch(err => {
        console.log(err)
        return cb(err)
      })
  },
  getDb: () => dbConnection
}