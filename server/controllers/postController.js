const { initContentful } = require('../lib/contentful');

exports.getPosts = async (req, res) => {
  const client = initContentful(process.env);
  const data = await client.getEntries({ content_type: 'post' });

  return res.json(data.items);
};

exports.getPost = async (req, res) => {
  const client = initContentful(process.env);
  const data = await client.getEntries({
    content_type: 'post',
    include: 2,
    'fields.slug': req.query.slug,
  });

  return res.json(data.items[0]);
};
