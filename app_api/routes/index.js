const express = require('express'); // Express app
const router = express.Router(); // Express router

// This is where we import the controller we will route
const tripsController = require('../controllers/trips'); // Import controller

// define route for our trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList) // GET: /trips - list all the trips
    .post(tripsController.tripsAddTrip); // POST: /trips - add a new trip

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - requires parameter
// DELETE Method routes tripsDeleteTrip - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode) // GET: /trips/:tripCode - lists a single trip
    .put(tripsController.tripsUpdateTrip) // PUT: /trips/:tripCode - updates a single trip
    
module.exports = router; // Export the router for use in the app