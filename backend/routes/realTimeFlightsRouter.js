const { default: axios } = require('axios');
const express = require('express')
require("dotenv").config();
const request = require('request')
const realTimeFlightsRouter = express.Router()

realTimeFlightsRouter.get('/:arr_iata', (req, res) => {
  const arr_iata = req.params.arr_iata
  const seedData = async () => {
  console.log(arr_iata)
  const api_key = process.env.api_key
  const url = `https://airlabs.co/api/v9/flights?&arr_iata=${arr_iata}&airline_iata=WN&api_key=${api_key}`;
  console.log

  try {
      const { data : flights } = await axios.get(url);

      const flightPromises = Object.keys(flights).map(Key => {
          
          console.log(Key); 
          console.log(flights[Key]); 
          return {[Key]: flights[Key]};
      });
      await Promise.all(flightPromises)
      
  } catch(err) {
      console.log(err);
      console.log('Oh no!')
  }

};
    const data = seedData();
    console.log(data)
    res.status(200).json({message: 'Success'})
  
  })

   realTimeFlightsRouter.get('/flights/:arr_iata', function(req, res) {
     const apiKey = process.env.api_key;
     const searchFlight = req.params.body
     console.log(searchFlight)
     res.status(200).json({message: searchFlight})
  
 });


  module.exports = realTimeFlightsRouter