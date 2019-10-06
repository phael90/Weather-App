
const request = require('request')

const url = 'https://api.darksky.net/forecast/efc4e98e0aa6e18f52710b39d58b4676/37.8267,-122.4233?units=si'


request({ url: url,json:true }, (error, response) => {
    console.log(response); 
})