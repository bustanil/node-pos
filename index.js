var express = require('express')
var appConfig = require('./config').app
var app = express()

var routes = require('./routes')(app);

app.listen(appConfig.port, function () {
    console.log('Example app listening on port 3000!')
})