import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { authorName } from 'data/site-data';

export function Header({isDarkTheme, setIsDarkTheme}) {
  const imageUrl = isDarkTheme 
    ? "https://www.flaticon.com/svg/static/icons/svg/1829/1829191.svg"
    : "https://www.flaticon.com/svg/static/icons/svg/1829/1829241.svg";

  return (
    <header className="sticky top-0 z-10 bg-primaryBg transition-colors-300">
      <div className="container header-height px-4 pt-2 pb-1 flex flex-row items-center">
        <div className="text-accent">
          <Link href="/">
            <a aria-label="Home" title="Home" className="flex gap-2 items-center">
              <img className="rounded-full w-10 h-10 object-contain border-2 border-accent" src="/assets/images/profile/profile-picture.jpg" alt="Profile picture" />
              <span>{authorName}</span>
            </a>
          </Link>
        </div>
        <nav className="flex items-center ml-auto">
          <ul className="flex flex-row ">
            <HeaderLink href="#skills">Skills</HeaderLink>
            <HeaderLink href="#experience">Experience</HeaderLink>
            <HeaderLink href="#education">Education</HeaderLink>
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

function HeaderLink({href, children, ...props}) {
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