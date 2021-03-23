import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { authorName } from 'data/site-data';
import ToggleDarkModeButton from './ToggleDarkModeButton';
import HeaderLinks from './HeaderLinks';
import styles from './index.module.css';
import debounce from 'utils/debounce';

export default function Header({ isDarkTheme, setIsDarkTheme }) {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollPos = window.pageYOffset;

      const minScroll = 40;
      const isScrollingUp = prevScrollPos - currentScrollPos > minScroll;
      const alwaysVisibleAt = 20;

      setVisible(isScrollingUp || currentScrollPos < alwaysVisibleAt);
      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header className={`${visible ? 'top-0' : styles.headerHidden} sticky z-30 bg-primaryBg transition-all-300`}>
      <div className={`container ${styles.headerHeight} pt-2 pb-1 flex flex-row items-center justify-between`}>
        <div className="flex w-full justify-between items-center">
          <Link href="/">
            <a aria-label="Home" title="Home" className="flex space-x-2 items-center text-accent text-xl">
              <img className="rounded-full w-10 h-10 object-contain border-2 border-accent" src="/assets/images/profile/profile-picture.jpg" alt="Profile picture" />
              <span>{authorName}</span>
            </a>
          </Link>
          <ToggleDarkModeButton isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        </div>
        <HeaderLinks />
      </div>
    </header>
  );
}

Header.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
};
