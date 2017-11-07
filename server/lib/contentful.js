const { createClient } = require('contentful');

exports.initContentful = ({ SPACE, TOKEN, HOST }) => (
  createClient({
    space: SPACE,
    accessToken: TOKEN,
    host: HOST,
  })
);
