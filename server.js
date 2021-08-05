const compression = require('compression');
const express = require('express');
const parser = require('body-parser');
const proxy = express();
const port = 3000;
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const createProxyMiddleware = require('http-proxy-middleware');
const axios = require('axios');

const service = "http://localhost:3004";
//when deployed: service = ec2

proxy.use(compression());
proxy.use(express.static(path.join(__dirname, 'public')));
proxy.use(morgan('dev'));
proxy.use(parser.urlencoded({ extended: true}))
proxy.use(express.json())
proxy.use(cors());

proxy.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

proxy.get('*/dp/:productId', (req, res) => {
  res.sendFile(path.join(__dirname, '/./public/index.html'));
});

proxy.get(`/:productId`, (req, res) => {
  res.sendFile(path.join(__dirname, `/./public/index.html`))
});

proxy.use('/reviews/:productid', createProxyMiddleware({
  target: service,
  changeOrigin: true
  })
);

proxy.post('/newReview/:productid', (req, res) => { //'http://localhost:3000/'
  let review = req.body.body;
  let rndId = Math.floor(Math.random() * (1000000 - 900000) + 900000);
  axios.post(`http://localhost:3004/newReview/${rndId}`, JSON.stringify(review))
    .then((data) => {
      console.log('PROXY Post DATA:', data);
      res.status(201).send(JSON.stringify(data));
    })
    .catch((err) => {
      throw err;
    });
});

proxy.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`);
});
