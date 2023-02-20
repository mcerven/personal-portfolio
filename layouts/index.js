import React, { useEffect, useCallback, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from 'components/Header';
import Footer from 'components/Footer';
import BackgroundWave from 'components/BackgroundEffects/BackgroundWave';
import { authorName, jobTitle } from 'data/site-data';

const siteUrl = 'https://mariocerven.netlify.app';
const imageUrl = `${siteUrl}/assets/images/profile/profile-picture.jpg`;
const techStackShort = 'React, Next.js, Node.js, .NET and more';
const pageTitle = `${authorName} | ${jobTitle}`;
const description = `I build websites using ${techStackShort}`;

export default function Layout({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    themeCheck();
  }, [isDarkTheme]);

  // check and reset theme
  const themeCheck = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkTheme(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkTheme(false);
    }
  }

  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta data-n-head="ssr" name="viewport" content="width=device-width,initial-scale=1" />
        
        <meta data-n-head="ssr" data-hid="author" name="author" content="Mario Cerven" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" property="keywords" content="fullstack developer,full stack developer,full-stack developer,web developer,frontend developer,front-end developer,javascript,react,react.js,react developer,node.js,node.js developer,.net,.net developer,c#,c# developer" />
        <meta data-n-head="ssr" data-hid="description" name="description" property="description" content={description} />
        
        <meta data-n-head="ssr" data-hid="og:site_name" name="og:site_name" property="og:site_name" content="mariocerven.netlify.app" />
        <meta data-n-head="ssr" data-hid="og:type" name="og:type" property="og:type" content="website" />
        <meta data-n-head="ssr" data-hid="og:title" name="og:title" property="og:title" content={pageTitle} />
        <meta data-n-head="ssr" data-hid="og:url" name="og:url" property="og:url" content={siteUrl} />
        <meta data-n-head="ssr" data-hid="og:image" name="og:image" property="og:image" content={imageUrl} />
        <meta data-n-head="ssr" data-hid="og:description" name="og:description" property="og:description" content={description} />
        
        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" property="twitter:title" content={pageTitle} />
        <meta data-n-head="ssr" data-hid="twitter:url" name="twitter:url" property="twitter:url" content={siteUrl} />
        <meta data-n-head="ssr" data-hid="twitter:image" name="twitter:image" content={imageUrl} />
        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" property="twitter:description" content={description} />
        <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image" />
        
        <link rel="icon" href="/favicon.ico" />
        <link data-n-head="ssr" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&amp;display=swap" defer />
      </Head>
      <div>
        <div className="min-h-screen flex flex-col">
          <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <main className="flex-1 bg-primaryBg transition-colors-300 pt-12 pb-14">
            <div className="container">
              {children}
            </div>
          </main>
          <BackgroundWave topColor="var(--color-primaryBg)" bottomColor="var(--color-secondaryBg)" />
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
};
