process.env.NODE_ENV = 'test';

const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app');
const knex = require('../knex');

beforeEach(done => {
  Promise.all([
    knex('sloths').insert({id: 1, name: 'Jerry', age: 4, image: 'https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Three-toed-Sloth-photo.jpg'}),
    knex('sloths').insert({id: 2, name: 'Sally', age: 2, image: 'http://www.wildlifeextra.com/resources/listimg/world/Africa/3_toed_sloth@large.jpg'}),
    knex('sloths').insert({id: 3, name: 'Sawyer', age: 1, image: 'http://www.rainforest-alliance.org/sites/default/files/styles/responsive_breakpoints_theme_rainforest_wide_1x/public/slideshow/header/three-toed-sloth.jpg'})
  ]).then(() => done());
});

afterEach(done => { knex('sloths').del().then(() => done()) });


describe('GET /sloths', () => {
	it('responds with JSON', done => {
		request(app)
			.get('/sloths')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});

	it('returns an array of all sloth objects when responding with JSON', done => {
    request(app)
      .get('/sloths')
      .end((err, res) => {
        expect(res.body).to.deep.equal(
          [{
          id: 1,
          name: 'Jerry',
          age: 4,
          image: 'https://gifts.worldwildlife.org/gift-center/Images/large-species-photo/large-Three-toed-Sloth-photo.jpg'
        }, {
          id: 2,
          name: 'Sally',
          age: 2,
          image: 'http://www.wildlifeextra.com/resources/listimg/world/Africa/3_toed_sloth@large.jpg'
        }, {
          id: 3,
          name: 'Sawyer',
          age: 1,
          image: 'http://www.rainforest-alliance.org/sites/default/files/styles/responsive_breakpoints_theme_rainforest_wide_1x/public/slideshow/header/three-toed-sloth.jpg'
        }]

      );
        done();
      });
  });
});

describe('GET /sloths/:id', () => {
  
});

xdescribe('POST /sloths', () => {
});

xdescribe('PUT /sloths/:id', () => {
});

xdescribe('DELETE /sloths/:id', () => {
});
