var request = require('request');

const BASE_URL = 'http://swapi.co/api/';

function wrapperRequest(url) {
    let endpoint = {
        url: (url.indexOf(BASE_URL) > -1) ? url : BASE_URL + url,
    };
    return new Promise((resolve, reject) => {
        request(endpoint, (err, response, body) => {
            let responseBody;
            try {
                responseBody = JSON.parse(body);
            } catch (err) {
                return reject({ err: 'JSON parse error' });
            }
            return resolve(responseBody);
        });
    });
}

module.exports = {
    getPeople() {
        return wrapperRequest('people');
    },
    getStarships() {
        return wrapperRequest('starships');
    },
    getPlanets() {
        return wrapperRequest('planets');
    },
    get(url) {
        return wrapperRequest(url); //search method wrapper
    },
};