const express = require('express')
const handlebars = require('express-handlebars')
const indexRoute = require('./app/routes')
const env = require('dotenv')

env.load()

const app = express()

app.engine('.hbs',
	handlebars({defaultLayout: 'index', extname: '.hbs'})
)

app.set('view engine', '.hbs')
app.set('views', __dirname + '/app/views')

app.use('/', express.static(__dirname + '/public'))
app.use('/', indexRoute)

const port = process.env.PORT || 8080
app.listen(port, () => {
	console.log(`Node app is listening on port ${port}...`)
})