// const app = require('./server');
// const mongoose = require('mongoose');
// const supertest = require('supertest');
// const config = require('config');
// const Product = require('./model/product');
// const { response } = require('jest-mock-req-res');

// describe('REST API integration tests', () => {
//   it('should require authorization', function (done) {
//     supertest(app)
//       .get('/product')
//       .expect(401)
//       .end(function (err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });

//   beforeEach((done) => {
//     const { host, user, pass } = config.get('database');
//     mongoose
//       .connect(`mongodb+srv://${host}`, {
//         user,
//         pass,
//       })
//       .then((conn) => {
//         console.log('Connection success!');
//         done();
//       })
//       .catch((err) => {
//         throw new Error(err.message);
//       });
//   });

//   afterEach((done) => {
//     mongoose.connection.close(() => done());
//   });

//   test('GET /product', (done) => {
//     supertest(app)
//       .get('/product')
//       .expect(200)
//       .then((response) => {
//         expect(Array.isArray(response.body)).toBeTruthy();
//         done();
//       });
//   });
// });

const app = require('./server');
const request = require('supertest')(app);

const loginUser = (auth) => {
  return (done) => {
    const onResponse = (err, res) => {
      auth.token = res.body.accessToken;
      return done();
    };

    request
      .post('/login')
      .send({
        email: 'admin@gmail.com',
        password: 'test12345',
      })
      .expect(200)
      .end(onResponse);
  };
};

describe('GET /product', function () {
  it('should require authorization', (done) => {
    request
      .get('/product')
      .expect(401)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });

  var auth = {};
  beforeAll(loginUser(auth));

  it('should respond with JSON array', (done) => {
    request
      .get('/product')
      .set('Authorization', 'bearer ' + auth.token)
      .expect(200)
      .expect('Content-Type', /json/)
      .end((err, res) => {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});
