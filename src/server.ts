import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json('Hello');
});

app.listen(3333);
