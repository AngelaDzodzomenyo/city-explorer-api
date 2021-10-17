'use-strict';

//importing dotenv, express, cors
//require has to be at the top
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const weather = require('./data/weather.json');
const { default: axios } = require('axios');
const getWeather = require('./weather');
const getMovies = require('./movies')

//initialize express. Need a variable to hold and call express to do the chaining method
const app = express();

//app uses the cors function(anyone can talk to my server)
app.use(cors());

//server needs a port *remember to always call it PORT which is industry standard*
const PORT = process.env.PORT;

//Building route in express
// get is a function that takes in two paramenters. takes in path/route and another callback function that takes in (req*front-end*,res*back-end*)
app.get('/', (request, response) => {
  response.status(200).send('Yay!');
});

app.get('/weather',getWeather)

// class Forecast {
//   constructor(day) {
//     this.date = day.valid_date,
//     this.description = day.weather.description
//   } 
// }

app.get('/movies', getMovies)


//need to run a listen function that comes with express. takes in PORT and callback function. callback function is to console log that PORT is up and runing
app.listen(PORT, () => console.log(` server is up on ${PORT}`)); //<---ALWAYS had to be the very last line of code. Anything out of order wont work bc this listener has to listen for everything above it

//^^This is kind of what you need to start your server
//node server.js in terminal to start





