import { useEffect } from "react";
import "../../style/style.css";
import "../../public/assets/css/style.css";
import useMagneticHover from "../hooks/useMagneticHover";
import useButtonHover from "../hooks/useButtonHover";
import SmoothPageScroll from "../utils/SmoothPageScroll";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import Head from "next/head";
import { appWithTranslation } from "next-i18next";

function App({ Component, pageProps }) {
  useButtonHover();
  useMagneticHover();
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <>
      <Head>
        <title>MutluolProje </title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Yatırım Danışmanlığı" />
        <link rel="icon" href="assets/img/site-logo.png" type="image/svg" sizes="20x20" />
      </Head>
      <Component {...pageProps} />
      <ScrollTopBtn />
      <SmoothPageScroll />
    </>
  );
}

export default appWithTranslation(App);
