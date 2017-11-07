import React from 'react';

import MarkdownRenderer from '../../components/MarkdownRenderer';

const Post = ({ data: { fields } }) => (
  <main>
    <h1>{ fields.title }</h1>

    <MarkdownRenderer content={ fields.body } />
  </main>
);

export default Post;
