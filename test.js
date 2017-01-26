var app = require('./index');
var supertest = require('supertest');
var assert = require('assert');

var server = supertest.agent("http://localhost:3000");

describe('GET api/images', function() {
  it('respond with json', function(done) {
    server
      .get('/api/images')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET api/images/:id', function() {
  it('respond with id = 1', function(done) {
    server
      .get('/api/images/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res) {
        var id = res.body.id;
        assert.equal(id, 1, '== coerces values to strings');
        done();
    });
  });
});

describe('GET api/messages', function() {
  it('respond with json', function(done) {
    server
      .get('/api/messages')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('GET api/messages/:id', function() {
  it('respond with id = 1', function(done) {
    server
      .get('/api/images/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res) {
        var id = res.body.id;
        assert.equal(id, 1, '== coerces values to strings');
        done();
    });
  });
});
