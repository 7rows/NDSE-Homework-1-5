#!/usr/bin/env node
const http = require("http");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { URL } = require('./config');

const argv = yargs(hideBin(process.argv))
    .command('city', 'City name')
    .alias('city', 'c')
    .help()
    .argv

console.log(argv.city)
if (!argv.city) {
    console.error("City is Empty");
    process.exit(-1);
}

const urlWithCity = `${URL}&query=${argv.city}`

http.get(urlWithCity, (res) => {
    const {statusCode} = res;

    if (statusCode !== 200) {
        console.error(`Status code ${statusCode}`);
        return;
    }

    let rawData = "";
    res.on("data", (chunk) => (rawData += chunk));
    res
        .on("end", () => {
            const { location, current } = JSON.parse(rawData)
            if (!location || !current) return

            console.log(
                `City = ${ location.name }`
            );
            console.log(`Weather: ${ current.temperature }℃`)
            console.log(`Wind Speed: ${ current.wind_speed: }`)
            console.log(`Pressure: ${ current.pressure }`)
            console.log(`Humidity: ${ current.humidity }%`)
        })
        .on("error", (e) => {
            console.error(`Ошибка: ${e.message}`)
        });
});


