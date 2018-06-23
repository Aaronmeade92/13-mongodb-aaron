'use strict';

require('babel-register')

import superagent from 'superagent';
import app from '../app.js';
import modelFinder from './middleware/modelFinder.js';

describe('Schema Module', () => {

  it('should return no animals', () => {

    return Animal.find().then(animal => {
      fail('wtf');
      expect(animals).toBe([]);
    }).catch(err => fail(err));
  });

  it('should create a singer', () => {

    let shark = new Animal({name: 'Shark', numberOfLegs: 0, hasFur: false, eatsHumans: false});

    return shark.save().then(animal => {
      expect(animal.name).toEqual('Shark');
    }).catch(err => fail(err));
  });
})