const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const CORS = require('cors');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// import environmental variables from our .env file
require('dotenv').load();

// create our Express app
const server = express();

// Takes the raw requests and turns them into usable properties on req.body
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(CORS());

app
  .prepare()
  .then(() => {
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
