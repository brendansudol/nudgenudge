var bodyParser = require('body-parser')
var express = require('express')
var mongodb = require('mongodb')

var DB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/bren'
var NUDGE_COLLECTION = 'nudges'

var app = express()
var db

app.set('port', process.env.PORT || 3000)
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongodb.MongoClient.connect(DB_URL, function(err, database) {
  if (err) {
    console.log(err)
    process.exit(1)
  }

  db = database
  console.log('db ready!')

  app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
  })
})

app.post('/save', function(req, res) {
  console.log(req.body)
  res.send(`TODO: (${JSON.stringify(req.body)})`)
})

app.get('/test_save', function(req, res) {
  var entry = { foo: 'foo', bar: 'bar', baz: 'baz', bren: 'bren' }
  db.collection(NUDGE_COLLECTION).insertOne(entry, function(err, doc) {
    if (err) return res.json({ success: false, data: err.message })
    return res.json({ success: true, data: doc.ops[0] })
  })
})

app.get('/test_nudges', function(req, res) {
  db.collection(NUDGE_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) return res.json({ success: false, data: err.message })
    return res.json({ success: true, data: docs })
  })
})
