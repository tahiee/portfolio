import { useEffect } from 'react';
import Head from "next/head";
import AOS from "aos";

import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'

import '../styles/globals.scss'

import '/styles/header.scss'
import '/styles/outer.scss'
import '/styles/gooery.scss'
import '/styles/works.scss'
import '/styles/side-element.scss'
import '/styles/myself.scss'
import '/styles/graphics.scss'
import '/styles/projects.scss'
import '/styles/maps.scss'
import '/styles/views-title.scss'
import '/styles/hover-image.scss'
import '/styles/window-screen.scss'
import '/styles/reviews.scss'
import '/styles/top-scrolled-bar.scss'
import '/styles/contact.scss'
import '/styles/cursor.scss'
import '/styles/muneeb-khan.scss'
import '/styles/smile-loader.scss'
import '/styles/pre-loader.scss'
import '/styles/certifications.scss'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
    import("aos/dist/aos.js");
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <title>Tahir Khan Portfolio</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Tahir Khan's portfolio showcasing projects, experience, and skills in JavaScript, React, Node, and Next.js." />
        <meta name="keywords" content="Tahir Khan, portfolio, JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Web3, PWA, AWS, Docker" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0d1117" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Tahir Khan Portfolio" />
        <meta property="og:description" content="Portfolio of Tahir Khan – projects, experience, and contact information." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/profile2.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tahir Khan Portfolio" />
        <meta name="twitter:description" content="Portfolio of Tahir Khan – projects, experience, and contact information." />
        <meta name="twitter:image" content="/assets/profile2.jpg" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/16.png"
          rel="icon"
          type="image/png"
          sizes="16x16" />
        <link
          href="/icons/32.png"
          rel="icon"
          type="image/png"
          sizes="32x32" />
        <link rel="apple-touch-icon" href="/icons/16.png"></link>
        <link rel="apple-touch-icon" href="/icons/32.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
