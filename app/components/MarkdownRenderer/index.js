/* eslint-disable */
import React from 'react';
import { marksy } from 'marksy';

const compile = marksy({
  createElement: React.createElement,
  elements: {},
});

export default ({ content, toc, ...rest }) => (
  <div>
    { compile(content, null, rest).tree }
  </div>
);
