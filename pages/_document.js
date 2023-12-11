import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link
            href="https://img.favpng.com/21/5/24/django-web-development-web-framework-python-software-framework-png-favpng-XaZVgk1LHXtvj7U1fPCMqj3iH.jpg"
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
