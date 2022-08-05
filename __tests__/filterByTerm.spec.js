// You may wonder why the extension includes .spec.. It is a convention borrowed from Ruby for marking the file as a specification for a given functionality.  describe, a Jest method for containing one or more related tests.  test which is the actual test block:

// npm test -- --coverage

const { sum } = require('../../js-testing-fundamentals/math');
const filterByTerm = require('../filterByTerm');

// function filterById(inputArr, id) {
//   return inputArr.filter(function (arrayElement) {
//     return arrayElement.url.match(id);
//   });
// }

// const filterByTerm = (items, term) => {
//   return items.filter(({ url }) => url.includes(term.toLowerCase()));
// };

//  Remember, testing is a matter of inputs, functions, and expected outputs.
describe('Filter function', () => {
  test('it should filter by a search term (link)', () => {
    const input = [
      { id: 1, url: 'https://www.url1.dev' },
      { id: 2, url: 'https://www.url2.dev' },
      { id: 3, url: 'https://www.link3.dev' },
    ];

    const output = [{ id: 3, url: 'https://www.link3.dev' }];

    expect(filterByTerm(input, 'link')).toEqual(output);
  });
});
