const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const CORS = require('cors');

const routes = require('./routes');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

const postController = require('./controllers/postController');

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
    server.get('/api/posts', postController.getPosts);
    server.get('/api/post', postController.getPost);

    server.use(handler);

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
