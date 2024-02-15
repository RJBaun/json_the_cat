const { fetchBreedDescription } = require('./breedFetcher');
const query = process.argv.slice(2);

fetchBreedDescription(query[0], (error, desc) => {
  if (error) {
    console.log(`Error fetch details: ${error.message}`);
  } else {
    console.log(desc);
  }
});