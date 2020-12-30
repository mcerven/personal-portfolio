import React, { useState } from 'react'
import { Header, Footer } from 'components';
import PropTypes from 'prop-types';

export default function Layout({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`${isDarkTheme ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col bg-primaryBg transition-colors-300">
        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <main className="flex-1" style={{paddingTop: '3rem', paddingBottom: '3.5rem'}}>
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