const request = require("request");
// allow for user input





const fetchBreedDescription = function(breedname, callback) {
  // request 'query' from URL
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedname}`, (error, response, body) => {
    // if there is an error
    if (error) {
      return callback(error, null);
    }
    //convert string to object
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(Error(`${breedname} did not return any results`), null);
    } else {
      return callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };