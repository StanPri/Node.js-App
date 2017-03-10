const expect = require('expect');
const utils = require("./utils");

describe("Utils", () => {
  it('should add two numbers', () => {
    var res = utils.add(25, 5);

    expect(res).toBe(30).toBeA('number');
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
  });

  describe('Async functions', () => {
    it ('should async square numbers', (done) => {
      utils.square(6, (square) => {
        expect(square).toBe(36).toBeA('number');
        done();
      });


    });


    //Async test with 'done'
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
          expect(sum).toBe(7).toBeA('number');
          done();
      })
    });
  });
});
