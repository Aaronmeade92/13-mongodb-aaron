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
        console.log(results.text);
        try {
          const newAnimal = JSON.parse(results.text);
          console.log(newAnimal);
          expect(newAnimal.name).toBe(shark.name);
        } catch (err) {
          fail(err);
        }
        
    }).catch(err => fail(err))
  });
});