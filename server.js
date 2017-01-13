var bodyParser = require('body-parser')
var express = require('express')
var pg = require('pg')

var app = express()
var db = process.env.DATABASE_URL || 'postgres://localhost:5432/bren'

app.set('port', process.env.PORT || 3000)
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/save', function (req, res) {
  console.log(req.body)
  res.send(`TODO: (${JSON.stringify(req.body)})`)
})

app.get('/db', function (req, res) {
  pg.connect(db, function(err, client, done) {
    var query = 'INSERT INTO test_table VALUES ($1, $2)'
    var values = [2, 'foo']

    client.query(query, values, function (err, result) {
      done()
      if (err) return res.json({ success: false, data: err })
      return res.json({ success: true })
    })
  })
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
