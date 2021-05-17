const http = require("http");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { URL } = require('./config');
const createUrlWithCity = (city)=> `${URL}&query=${city}`



