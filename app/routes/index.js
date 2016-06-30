const express = require('express')
const router = express.Router()

const months = [
  'January', 'February',  'March',
  'April',    'May',      'June',
  'July',     'August',   'September',
  'October',  'November', 'December'
]

router.get('/', (req, response) => {
  response.sendFile('index.html')
})
.get('/:date', (req, response) => {

  const newDate = (new Date(req.params.date) != 'Invalid Date') ? new Date(req.params.date) : new Date(Number(req.params.date))

  if (newDate != 'Invalid Date') {
    response.json({
      'unix': newDate.getTime(),
      'natural': `${months[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`
    })
  } else {
    response.json({
      'unix': null,
      'natural': null
    })
  }

})

module.exports = router