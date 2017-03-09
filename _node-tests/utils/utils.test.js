const expect = require('expect');
const utils = require("./utils");


it('should add two numbers', () => {
  var res = utils.add(25, 5);

  expect(res).toBe(30).toBeA('number');
});

it ('should square numbers', () => {
  var res = utils.square(6);

  expect(res).toBe(36).toBeA('number');
});

it('should be the same', () => {
  expect({name: 'Stan'}).toEqual({name:'Stan'});
});

it('should set first and last names are set', () => {
  let user = {
    age: 26,
    location: 'California'
  }

  let res = utils.setName(user, "Stan Pri");

  expect(res).toInclude({firstName: 'Stan', lastName: "Pri"});
})
