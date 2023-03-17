const express = require('express');
const app = express();

let port = 3000;
const Clubs = require('./data/clubs');
const _ld = require('lodash');

app.use('/assets', express.static('./client/assets'));
app.use('/pages', express.static('./client/pages'));
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.get('/club', (req, res) => {
  res.send(Clubs);
});

app.delete('/club/:id', (req, res) => {
  let id = req.params.id;
  console.log(id)
  let index = _ld.findIndex(Clubs, (c) => {
    return c.id == id;
  });
  Clubs.splice(index, 1);
  res.sendStatus(200);
});

app.get('/club/:id', (req, res) => {
  let id = req.params.id;
  let club = _ld.find(Clubs, (o) => {
    return o.id == id;
  });
  res.send(club);
});

app.put('/club/:id', (req, res) => {
  let id = req.params.id;
  let index = _ld.findIndex(Clubs, (o) => {
    return o.id == id;
  });
  // console.log(req.body)
  Clubs[index] = req.body;
  // console.log(Films[index])
  res.sendStatus(200);
});