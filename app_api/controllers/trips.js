const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // Register model
const Model = mongoose.model('trips'); // Retrieve model

// GET: /trips - list all the trips
// Regardless of outcomme, response must include HTML status code
// and JSON message to the requesting client 
const tripsList = async (req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // Uncomment the folllowing line to show results of query in the console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
                .status(200)
                .json(q);
    }

};

// GET: /trips/:tripCode - lists a single trip
// Regardless of outcome, resonse must include HTML status code 
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({ 'code' : req.params.tripCode }) // Return single record
        .exec();

        // Uncomment the folllowing line to show results of query in the console
        // console.log(q);

    if(!q)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // Return resulting trip list
        return res
                .status(200)
                .json(q);
    }

};

module.exports = {
    tripsList,
    tripsFindByCode
};