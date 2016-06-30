const express = require('express')
const router = express.Router()

const months = [
  'January', 'February',  'March',
  'April',    'May',      'June',
  'July',     'August',   'September',
  'October',  'November', 'December'
]

router.get('/', (req, response) => {
  response.render('index', {
    projectURL: process.env.APP_URL || 'https://cu7ious-fcc-req-hp.herokuapp.com/',
    layout: false
  })
})
.get('/api', (req, response) => {
  response.send('Welcome to our API. Try /api/whoami/ endpoint')
})
.get('/api/whoami', (req, response) => {
  const ip   = (req.headers['x-forwarded-for']) ? req.headers['x-forwarded-for'] : false
  const lang = (req.headers['accept-language']) ? req.headers['accept-language'] : false
  const ua   = (req.headers['user-agent']) ? req.headers['user-agent'].split(/\s*[;)(]\s*/) : false

  console.log(ua)

  response.json({
    'ipaddress': ip,
    'language' : lang,
    'software' : (ua.length > 1) ? `${ua[1]}; ${ua[2]}` : ua[0]
  })
})

module.exports = router