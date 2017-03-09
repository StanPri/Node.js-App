const utils = require("./utils");

it('should add two numbers', () => {
  var res = utils.add(25, 5);
  if( res !== 30)
    throw new Error(`Expected value is 30, but got ${res}`);
});

it ('should square numbers', () => {
  var res = utils.square(6);
  if (res !== 36)
    throw new Error(`Expected value is 36, but got ${res}`);
});
