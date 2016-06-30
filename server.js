const express = require('express')

const app = express()
require('dotenv').load()

const port = process.env.PORT || 8080
app.listen(port, () => {
	console.log(`Node app is listening on port ${port}...`)
})