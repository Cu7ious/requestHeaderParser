const express = require('express')
const indexRoute = require('./app/routes')

const app = express()
require('dotenv').load()

app.use('/', express.static(__dirname + '/public'))
app.use('/', indexRoute)

const port = process.env.PORT || 8080
app.listen(port, () => {
	console.log(`Node app is listening on port ${port}...`)
})