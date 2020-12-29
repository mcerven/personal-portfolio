import React, { useState } from 'react'
import { Header, Footer } from 'components';
import PropTypes from 'prop-types';

export default function Layout({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`${isDarkTheme ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col">
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <main className="pt-10 pb-14 flex-1 bg-primaryBg transition-colors-300">
          <div className="container px-4">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any,
}