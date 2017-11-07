import React from 'react';
import axios from 'axios';

export default (
  Component,
  endpoint = null,
) => {
  class Setup extends React.Component {
    // getInitialProps is a Next thing. BEFORE it builds the page it fetches everything that it
    // needs to get into here. That way BEFORE the page even loads it has all the data it needs.
    static async getInitialProps({ req, query }) {
      // We want response to start out as null, just in case we don't get data.
      let res = null;

      // lets get the data from the endpoint
      if (endpoint) {
        // We need to build the baseUrl so that we can get data in prod and dev. i.e. dev it would
        // look like http://localhost:3000 but in prod it would look like http://mysite.com.
        const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';

        // Have axios get the data by combining the baseUrl and the endpoint we pass in.
        // { params: query } is required, this is because we do not know what the query is before
        // the page loads. getInitialProps is the earliest we know something like /posts/:slug
        res = await axios.get(
          `${baseUrl}/${endpoint}`,
          { params: query },
        );
      }

      return {
        // res by default is null, so start with that.
        // If we get a respobse from axios pass that data in. (res.data is not a thing).
        // Sometimes the response might already be figured out, in that case just pass the response.
        data: res && (res.data || res),
        query,
      };
    }

    render() {
      // Render the component that is passed into the setup component.
      return <Component { ...this.props } />;
    }
  }

  return Setup;
};
