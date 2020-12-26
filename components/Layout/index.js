import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header';

export default function Layout({children}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`${isDarkTheme ? 'dark' : ''}`}>
      <div className="min-h-screen bg-primaryBg flex flex-col transition-colors duration-300 ease-linear">
        <div className="container">
          <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        </div>
        <div className="container flex-1">
          {children}
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  )
}
