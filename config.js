require('dotenv').config()
const HOST = process.env.ENDPOINT
const KEY = process.env.API_WEATHER_KEY
module.exports = {
    URL:`${HOST}/current?access_key=${KEY}&units=m`
}

