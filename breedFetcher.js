const request = require("request");
// allow for user input
const query = process.argv.slice(2);



// request 'query' from URL
request(`https://api.thecatapi.com/v1/breeds/search?q=${query[0]}`, (error, response, body) => {
  // if there is an error
  if (error) {
    console.log('error: ', error.message);
    return false;
  }
  //convert string to object
  const data = JSON.parse(body);
  if (data[0] !== undefined) {
    console.log('body: ', data[0].description);
    return true;
  } else {
    console.log(`${query[0]} did not return any results`);
  }
});


