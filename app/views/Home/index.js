import React from 'react';

import { Link } from '../../../server/routes';

const Home = ({ data }) => (
  <main>
    { data.map(({ sys, fields }) => (
      <div key={ sys.id }>
        <Link route={ `/posts/${fields.slug}` }>
          <a>
            <h1>{ fields.title }</h1>
          </a>
        </Link>

        <p>{ fields.description }</p>
      </div>
    )) }
  </main>
);

export default Home;
