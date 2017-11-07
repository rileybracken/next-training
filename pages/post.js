import React from 'react';

import Setup from '../app/containers/Setup';

const component = ({ data }) => <pre>{ JSON.stringify(data, null, 2) }</pre>;

export default Setup(component, 'api/post');
