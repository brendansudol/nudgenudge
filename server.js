var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.set('port', (process.env.PORT || 3000))
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/save', function (req, res) {
  console.log(req.body)
  res.send(`TODO: (${JSON.stringify(req.body)})`)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'))
})
