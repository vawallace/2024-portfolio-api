import express from 'express';
import ServerlessHttp from 'serverless-http';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports.handler = ServerlessHttp(app);