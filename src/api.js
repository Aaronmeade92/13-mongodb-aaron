'use strict';
import express from 'express';
import Animals from '../models/animals.js';
const router = express.Router();

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};

// router.get('/pig', (req, res) => {
//   res.send('oink')
// })

router.get('/api/v1/animals', (req, res) => {
  Animals
    .find()
    .then(data => sendJSON(res, data))
    .catch(err => res.send(err));
});

router.post('/api/v1/animals', (req, res) => {

  let animal = new Animals(req.body)
  animal.save()
    .then(data => sendJSON(res, data))
    .catch(err => res.send(err));
})

router.put('/api/v1/animals/:id', (req, res) => {

  // Animals.find({_id:req.params.id}).then(animal => animal.update({...}))
  Animals.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
  ).then((data) => {
    sendJSON(res, data);
  }).catch(err => res.send(err));

})


export default router;