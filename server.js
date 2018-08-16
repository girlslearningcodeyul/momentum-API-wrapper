/*
title: nodeJS RESTful API wrapper for the four 'get' endpoints
author: Ksenia Nadkina
purpose: Momentum Travel Group Aptitude Test
date: 12 August 2018
*/

//TODO: integrating nextPage and previousPage promises to view the next page data, without creating additional endpoints

//Dependencies
const express = require('express'); //express server
const wrapper = require('./swapi-wrapper'); //node REST API wrapper 
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json({ type: 'application/json' }));

//Get people endpoint 
app.get('/searchPeople', (req, res) => {
    wrapper.getPeople().then((result) => {
        let results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
})

//Get planets endpoint
app.get('/planets', (req, res) => {
    wrapper.getPlanets().then((result) => {
        let results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
});

//Get starships endpoint
app.get('/starships', (req, res) => {
    wrapper.getStarships(1).then((result) => {
        let results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
});

//Search people endpoint
//format of the search string:
// https://swapi.co/api/people/?search=
app.get('/people', (req, res) => {
    let query = req.query.search;
    //console.log(query);
    wrapper.get('people/?search=' + query).then((result) => {
        //console.log(result.results);
        let results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
});

//server listening on specified port
app.listen(4000, () => console.log('Listening on port 4000!'))
