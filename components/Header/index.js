import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { authorName } from 'data/site-data';
import NavLink from './NavLink';
import routes from '../../data/routes';

export function Header({isDarkTheme, setIsDarkTheme}) {
  const imageUrl = isDarkTheme 
    ? "https://www.flaticon.com/svg/static/icons/svg/1829/1829191.svg"
    : "https://www.flaticon.com/svg/static/icons/svg/1829/1829241.svg";

  return (
    <header className="sticky top-0 z-30 bg-primaryBg transition-colors-300">
      <div className="container header-height pt-2 pb-1 flex flex-row items-center justify-between">
        <div className="text-accent">
          <Link href="/">
            <a aria-label="Home" title="Home" className="hidden sm:flex flex-wrap space-x-2 items-center">
              <img className="rounded-full w-10 h-10 object-contain border-2 border-accent" src="/assets/images/profile/profile-picture.jpg" alt="Profile picture" />
              <span>{authorName}</span>
            </a>
          </Link>
        </div>
        <nav className="flex items-center justify-end flex-wrap">
          <ul className="flex flex-row justify-end space-x-5 text-primary text-base font-medium">
            { routes.map(({href, text}) => 
              <NavLink key={href} href={href}>{text}</NavLink>
            )}
          </ul>
          <button
            aria-label="Toggle dark mode"
            className="w-5 h-5 ml-5 focus:outline-none"
            onClick={() => setIsDarkTheme(value => !value)}
            >
              <img src={imageUrl} alt="Brightness" />
          </button>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
}
