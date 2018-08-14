/*
title: nodeJS RESTful API wrapper for the four 'get' endpoints
author: Ksenia Nadkina
purpose: Momentum Travel Group Aptitude Test
date: 12 August 2018
*/

//TODO: how to deal with multiple pages of people, starships, 
//and planets: all displayed at the same time, first page 
//only (current) or arrow to move page-to-page?

//Dependencies
const swapi = require('swapi-node'); //a nodeJS helper library: https://www.npmjs.com/package/swapi-node
const express = require('express'); //express server
var bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json({ type: 'application/json' }));

var API_URL = 'http://swapi.co/api/';

// //Get people endpoint
app.get('/searchPeople', (req, res) => {
    swapi.get(API_URL + 'people/?page=').then((result) => {
        var results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
});

//Get planets endpoint
app.get('/planets', (req, res) => {
    swapi.get(API_URL + 'planets/?page=').then((result) => {
        var results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
});

//Get starships endpoint
app.get('/starships', (req, res) => {

    swapi.get(API_URL + 'starships/?page=').then((result) => {
        var results = result.results;
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
    swapi.get(API_URL + 'people/?search=' + query).then((result) => {
        //console.log(result.results);
        let results = result.results;
        res.send({ results });
    }).catch((err) => {
        console.log(err);
    });
});

//server listening on specified port
app.listen(4000, () => console.log('Listening on port 4000!'))
