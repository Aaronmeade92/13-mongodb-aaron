'use strict';

require('babel-register')
import supertest from 'supertest';
import superagent from 'superagent';
import {
  server
} from '../app.js';
import modelsHelper from '../models.helper.js';
const mockRequest = supertest(server);

const API_URL = '/api/v1/animals';

afterAll(modelsHelper.afterAll);
beforeAll(modelsHelper.beforeAll);
afterEach(modelsHelper.afterEach);


describe('Schema Module', () => {

  it('mockRequest should exist', () => {
    expect(mockRequest).toBeDefined();
  })

  it('should return an empty array for animals', () => {

    return mockRequest.get(API_URL).then(results => {
      expect(JSON.parse(results.text)).toEqual([])
    }).catch(err => {
      fail(err);
    });
  })

  it('should post an animal', () => {

    const sharkObj = {
      name: 'Shark',
      numberOfLegs: 4,
      hasFur: false,
      eatsHumans: true,
    };

    return mockRequest
      .post(API_URL)
      .send(sharkObj)
      .then(results => {
        try {
          const newAnimal = JSON.parse(results.text);
          expect(newAnimal.name).toBe(sharkObj.name);
        } catch (err) {
          fail(err);
        }

      }).catch(err => fail(err))
  });

  it('updates an ID with the info of a new animal', () => {

    const sharkObj = {
      name: 'Shark',
      numberOfLegs: 4,
      hasFur: false,
      eatsHumans: true,
    };
    const goatObj = {
      name: 'Goat',
      numberOfLegs: 4,
      hasFur: true,
      eatsHumans: false,
    };

    return mockRequest
      .post(API_URL)
      .send(sharkObj)
      .then(results => {
        let id = JSON.parse(results.text)._id;
        console.log(id)
        return mockRequest
          .put(`${API_URL}/${id}`)
          .send(goatObj)
          .then(results => {
            expect(JSON.parse(results.text).name).toBe('Goat');
          })
      }).catch(err => fail(err));
  })

  it('should delete when given an id', () => {

    const sharkObj = {
      name: 'Shark',
      numberOfLegs: 4,
      hasFur: false,
      eatsHumans: true,
    };
    return mockRequest
      .post(API_URL)
      .send(sharkObj)
      .then(results => {
        

      }).catch(err => fail(err))
  })
});