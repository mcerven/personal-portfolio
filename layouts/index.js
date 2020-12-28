import React, { useState } from 'react'
import { Header, Footer } from 'components';
import PropTypes from 'prop-types';

export default function Layout({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`${isDarkTheme ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-10 bg-primaryBg transition-colors-300">
          <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        </header>
        <main className="pt-2 pb-4 flex-1 bg-primaryBg transition-colors-300">
          <div className="container px-4">
            {children}
          </div>
        </main>
        <footer className="bg-secondaryBg text-onSecondaryBg transition-colors-300">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}