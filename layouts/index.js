import React, { useState } from 'react'
import { Header, Footer } from 'components';
import PropTypes from 'prop-types';

export default function Layout({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`${isDarkTheme ? 'dark' : ''}`}>
      <div className="min-h-screen bg-primaryBg flex flex-col transition-colors-300">
        <div>
          <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        </div>
        <main className="mt-2 mb-4 flex-1">
          <div className="container px-4">
            {children}
          </div>
        </main>
        <div className="w-full bg-secondaryBg text-onSecondaryBg">
          <Footer />
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}