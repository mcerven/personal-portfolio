import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export function Header({isDarkTheme, setIsDarkTheme}) {
  const imageUrl = isDarkTheme 
    ? "https://www.flaticon.com/svg/static/icons/svg/1829/1829191.svg"
    : "https://www.flaticon.com/svg/static/icons/svg/1829/1829241.svg";

  return (
    <div className="container px-4 py-1 flex flex-row items-center">
      <div className="flex-grow text-accent">
        <Link href="/">
          <a>
            <img
              className="w-12 h-12"
              src="https://www.flaticon.com/svg/static/icons/svg/876/876019.svg"
              alt="Coding" />
          </a>
        </Link>
      </div>
      <nav className="flex items-center">
        <ul className="flex flex-row ">
          <HeaderLink href="/about">About</HeaderLink>
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
  )
}

Header.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
}

function HeaderLink({children, href, ...props}) {
  return (
    <li className="ml-5 text-primary text-base font-medium
      border-transparent border-b-2 hover:border-accent transition-colors-300">
      <Link href={href} {...props}>{children}</Link>
    </li>
  );
}

HeaderLink.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
}