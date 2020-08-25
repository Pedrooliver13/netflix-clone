import GlobalStyle from "../styles/Global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap"
        rel="stylesheet"
      />

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
