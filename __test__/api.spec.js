'use strict';

require('babel-register')
import supertest from 'supertest';
import superagent from 'superagent';
import app from '../app.js';
import modelFinder from './middleware/modelFinder.js';

afterAll(modelsHelper.afterAll);
beforeAll(modelsHelper.beforeAll);
afterEach(modelsHelper.afterEach);

describe('Schema Module', () => {

  it('mockRequest should exist', () => {

    expect(mockRequest).toBeDefined();
  })

  xit('should return no animals', () => {

    return Animal.find().then(animal => {
      fail('wtf');
      expect(animals).toBe([]);
    }).catch(err => fail(err));
  });

  xit('should create a singer', () => {

    let shark = new Animal({name: 'Shark', numberOfLegs: 0, hasFur: false, eatsHumans: false});

    return shark.save().then(animal => {
      expect(animal.name).toEqual('Shark');
    }).catch(err => fail(err));
  });
})