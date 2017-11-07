const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes
  .add('index', '/')
  .add('post', '/posts/:slug');

module.exports = routes;
