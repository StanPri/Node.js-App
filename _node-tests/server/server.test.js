const request = require('supertest');
var app = require('./server').app;
const expect = require('expect');

it('should return hello world response', (done) => {
  request(app)
  .get('/')
  .expect(404)
  .expect((res) => {
      expect(res.body).toInclude({
        error: "Page not found"
      });
  })
  .end(done);
});

it('should test /users route', (done) => {
  request(app)
  .get('/users')
  .expect(200)
  .expect((res) => {
    expect(res.body).toInclude({
      name: "George Clooney",
      age: 60
    });
  })
  .end(done);
});
