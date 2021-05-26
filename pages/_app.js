import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700,400italic"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
