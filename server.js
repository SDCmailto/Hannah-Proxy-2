const compression = require('compression');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const proxy = express();
const port = 3000;

proxy.use(compression());
proxy.use(express.static(path.join(__dirname, 'public')));
proxy.use(bodyParser.json());
proxy.use(bodyParser.urlencoded({extended: true}));
proxy.use(cors());

proxy.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

proxy.use(express.static(path.join(__dirname, "public")))

// proxy.get('*/dp/:productId', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public'));
// });

proxy.get(`http://localhost:3004/reviews/1`, (req, res) => {
  res.sendFile(path.join(__dirname, 'public'))
});

proxy.post('/newReview/:productid', (req, res) => {
  let review = req.body.body;
  let rndId = Math.floor(Math.random() * (1000000 - 900000) + 900000);
  axios.post(`http://localhost:3004/newReview/${rndId}`, JSON.stringify(review))
    .then((data) => {
      console.log('PROXY DATA:', data);
      res.sendFile(path.join(__dirname, 'public'));
    })
    .catch((err) => {
      throw err;
    });
});

proxy.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`);
});
