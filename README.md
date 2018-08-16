Context
This is a technical aptitude test submitted on 16 of August, 2018. The requirements are to use the following as an online API: https://swapi.co/documentation. The API should be wrapped in a backend REST API client with the 4 endpoints required for the use cases. NodeJS runtime environment was used to perform this. The `get` calls are handled asynchronously using promises. The use cases are the following:
- the user can view a list of people (for simplicity sake, the list of first ten people)
- the user can view a list of planets (for simplicity sake, the list of first ten planets)
- the user can view a list of starships (for simplicity sake, the list of first ten starships)
- the user can search for a person 

Instructions
Initialize npm and install the following dependencies
$ npm init
$ npm install express --save
$ npm install body-parser --save

$ nodemon server.js
server is runnng on port 4000.

body-parser to enable the application to parse the response (used only in the search endpoint).

Sample REST API.
for this case, the four endpoints dealing with queries and fetching data from the server.
With REST, it is done using GET methods against the endpoints:
- /searchPeople
- /planets
- /starships
- /people/?search=

In the first case a call to the /searchPeople request endpoint will result in the response of 10 people of the following layout format:
{"results":[
    {"name":"Luke Skywalker",
    "height":"172",
    "mass":"77",
    "hair_color":"blond",
    "skin_color":"fair",
    "eye_color":"blue",
    "birth_year":"19BBY",
    "gender":"male",
    "homeworld":"https://swapi.co/api/planets/1/",
    "films":[
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/",
        "https://swapi.co/api/films/7/"],
    "species":[
        "https://swapi.co/api/species/1/"],
    "vehicles":[
        "https://swapi.co/api/vehicles/14/",
        https://swapi.co/api/vehicles/30/"],
    "starships":[
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"],
    "created":"2014-12-09T13:50:51.644000Z",
    "edited":"2014-12-20T21:17:56.891000Z",
    "url":"https://swapi.co/api/people/1/"},

...]}

The result is nested in the `results` object. Parsing the json file to display the names is done on the frontend.
Similarly, for the planets and the starship calls. 

The search functionality is supported by the Swapi API through a query of this format:
https://swapi.co/api/people/?search=chewbacca. The response is a json object of array that is filtered by the search query.

swapi-wrapper.js file exports four API wrapper modules getPeople, getPlanets, getStarships and get (for search queries). JSON parse error catch is also handled in the wrapper module.

NEXT TODO: add pagination of listings

THIS IS THE END OF THE CONCEPTOR DOCUMENTATION
---------------------------------------------------------------