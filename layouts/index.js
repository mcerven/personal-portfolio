import React, { useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import Footer from 'components/Footer';
import BackgroundWave from 'components/BackgroundEffects/BackgroundWave';
import { authorName } from 'data/site-data';

const siteUrl = 'https://mariocerven.netlify.app';
const imageUrl = `${siteUrl}/assets/images/profile/profile-picture.jpg`;
const jobTitle = 'Full-Stack Web Developer';
const techStackShort = 'React, Angular, Next.js, .NET and more';
const pageTitle = `${authorName} | ${jobTitle}`;
const description = `I build websites using ${techStackShort}`;

export default function Layout({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta data-n-head="ssr" name="viewport" content="width=device-width,initial-scale=1" />
        
        <meta data-n-head="ssr" data-hid="author" name="author" content="Mario Cerven" />
        <meta data-n-head="ssr" data-hid="keywords" name="keywords" property="keywords" content="fullstack developer,full stack developer,full-stack developer,web developer,frontend developer,front-end developer,javascript,react,react.js,react developer,angular,angular developer,.net,.net developer,c#,c# developer" />
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
      <div className={`${isDarkTheme ? 'dark' : ''}`}>
        <div className="min-h-screen flex flex-col">
          <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
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
}