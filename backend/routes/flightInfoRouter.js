const { default: axios } = require('axios');
const express = require('express')
require("dotenv").config();
const request = require('request')
const flightInfoRouter = express.Router()

flightInfoRouter.get('/:flight_iata', (req, res) => {
  const flight_iata = req.params.flight_iata
  const seedData = async () => {
  console.log(flight_iata)
  const api_key = process.env.api_key
  const url = `https://airlabs.co/api/v9/flight?&flight_iata=${flight_iata}&api_key=${api_key}`;
  console.log

  try {
      const { data : flightByFlightIata } = await axios.get(url);

      const flightByFlightIataPromises = Object.keys(flightByFlightIata).map(Key => {
          
          console.log(Key); 
          console.log(flightByFlightIata[Key]); 
          return {[Key]: flightByFlightIata[Key]};
      });
      await Promise.all(flightByFlightIataPromises)
      
  } catch(err) {
      console.log(err);
      console.log('Oh no!')
  }

};
   const data = seedData();
   console.log(data)
   res.status(200).json({message: 'Success'})
    

  });

module.exports = flightInfoRouter
