import React from 'react';
import { renderStatic } from 'glamor/server';

import Document, {
  Head,
  Main,
  NextScript,
} from 'next/document';

import stylesheet from './styles/styles.css';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const s = renderStatic(() => page.html);
    return { ...page, ...s };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = this.props.ids;
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Next Training</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
