import "../styles/globals.css";
import Layout from "../components/layout";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Fixeddiv from "../components/fixediv";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let timeId = null;
    timeId = setTimeout(() => setSocialmedia(true), 5000);

    return () => clearTimeout(timeId);
  }, []);
  const [soicalmedia, setSocialmedia] = useState(false);
  const clicked = () => {
    setSocialmedia(false);
  };
  return (
    <Layout>
      <Head>
        <title>Alttech </title>
        <meta name="description" content="Official website for Alttech " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      {soicalmedia && <Fixeddiv clicked={clicked} />}
    </Layout>
  );
}

export default MyApp;
