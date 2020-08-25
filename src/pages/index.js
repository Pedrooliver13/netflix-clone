import React from "react";
import Head from "next/head";


import Login from "../components/Login";

function App() {
  return (
    <>
      <Head>
        <title>Netflix - Clone</title>
        <link
          rel="icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
      </Head>

      <Login />
    </>
  );
}

export default App;
