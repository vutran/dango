let mockData = null;
let mockReject = false;

/**
 * Mocks the `got()`` function
 */
const got = () => new Promise((resolve, reject) => {
  if (mockReject) {
    reject(mockReject);
    return;
  }
  resolve({ body: mockData });
});

/**
 * Set fake data for the list endpoint
 *
 * Example: https://api.github.com/emojis
 *
 * @param {String|Array|Object} data
 */
// eslint-disable-next-line no-underscore-dangle
got.__setFakeData = (data) => {
  mockData = data;
};

/**
 * Make the got() return a rejected Promise
 *
 * Example: https://api.github.com/emojis
 *
 * @param {Object} data
 */
// eslint-disable-next-line no-underscore-dangle
got.__setReject = (flag) => {
  mockReject = flag;
};

module.exports = got;
