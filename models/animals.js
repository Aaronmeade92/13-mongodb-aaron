'use strict';

import mongoose from 'mongoose';

const animalSchema = mongoose.Schema({

  name: String,
  numberOfLegs: Number,
  hasFur: Boolean,
  eatsHumans: Boolean,
});

export default mongoose.model('Animals', animalSchema);