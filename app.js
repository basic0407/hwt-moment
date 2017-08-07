const moment = require('moment')
moment.locale('th')

const dateString = moment('2017-05-23').format('Do MMMM YYYY')          // Date string

console.log('Date String', dateString)