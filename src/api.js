'use strict';
import express from 'express';
import animals from '../models/animals.js';
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
  animals
    .find()
    .then(data => res.send(data))
    .catch(res.send(err));
});

router.post('/api/v1/animals', (req, res) => {

  let animal = new Animals(req.body)
  console.log(req.body)
  animal.save()
    .then(data => sendJSON(res, data))
    .catch(res.send(err));
})



export default router;