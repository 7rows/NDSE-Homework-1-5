require('dotenv').config()
const ENDPOINT = 'http://api.weatherstack.com'
const KEY = process.env.API_WEATHER_KEY
module.exports = {
    URL:`${ENDPOINT}/current?access_key=${KEY}&units=m`
}
