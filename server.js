const express = require('express')
const app = express()
const realTimeFlightsRouter = require ('./routes/realTimeFlightsRouter')
const flightInfoRouter = require('./routes/flightInfoRouter')

app.use('/realTimeFlightsRouter', realTimeFlightsRouter)

app.use('/flightInfoRouter', flightInfoRouter)

// app.get('/flights/:flight_number', async(req, res) => {

//     const flight_number = req.params.flight_number;
//     try {
//         const flights = await getFlightsByFlightNumber(flight_number);
//         res.json(flights)
//     } catch (error) {
//         console.error(err);
//         res.status(500).json({ err : 'Something went wrong'})
        
//     }
// })

//app.use('/flightDelaysRouter', flightDelaysRouter)


const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))