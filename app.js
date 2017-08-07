const moment = require('moment')
moment.locale('th')

const dateString = moment('2017-05-23').format('Do MMMM YYYY')          // Date string
const dateCustom = moment('12/08/2017', 'DD/MM/YYYY').format('dddd Do MMMM YYYY')          // Date string

console.log('Date String', dateString)
console.log('Date String Custom', dateCustom)