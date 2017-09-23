var express = require('express')
var appConfig = require('./config').app
var app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
var morgan = require('morgan')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// initialize routes
require('./routes')(app)

app.listen(appConfig.port || 3000, function () {
  console.log('Application is running on port 3000!')
})
