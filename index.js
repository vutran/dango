const got = require('got');

const ENDPOINT = 'https://api.getdango.com/api/emoji';

/**
 * Searches for emojis
 *
 * @param {String} q - The search query
 * @return {Promise} - An array of results
 */
module.exports = q => new Promise((resolve, reject) => {
  got(ENDPOINT, { query: { q }, json: true })
    .then(response => resolve(response.body.results))
    .catch(reject);
});
