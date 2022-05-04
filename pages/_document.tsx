import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;400;600;800;900&family=Montserrat:wght@200;400;600;800&family=Roboto+Serif:ital,opsz,wght@0,8..144,100;0,8..144,200;0,8..144,500;0,8..144,800;1,8..144,600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
