import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export function Header({isDarkTheme, setIsDarkTheme}) {
  const imageUrl = isDarkTheme 
    ? "https://www.flaticon.com/svg/static/icons/svg/1829/1829191.svg"
    : "https://www.flaticon.com/svg/static/icons/svg/1829/1829241.svg";

  return (
    <div className="container px-4 pt-2 pb-1 flex flex-row items-center">
      <div className="flex-grow text-accent">
        <div className="w-8 h-8">
          <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
              <path fill="currentColor" d="M447.716,97.794L297.207,10.993c-25.416-14.658-56.997-14.657-82.414,0L64.285,97.794 C38.819,112.479,23,139.866,23,169.266v173.467c0,29.4,15.819,56.787,41.284,71.472l150.509,86.801 c25.421,14.661,57.001,14.656,82.414,0l150.508-86.801C473.181,399.52,489,372.133,489,342.733V169.266 C489,139.867,473.181,112.48,447.716,97.794z M449,342.733c0,15.144-8.148,29.251-21.266,36.815l-150.509,86.801 c-13.093,7.552-29.358,7.552-42.451,0L84.265,379.548C71.148,371.983,63,357.877,63,342.733V169.266 c0-15.143,8.148-29.25,21.266-36.814l150.508-86.801c13.094-7.552,29.364-7.549,42.452,0l150.509,86.8 C440.852,140.016,449,154.122,449,169.266V342.733z" />
              <path fill="currentColor" d="M236.994,240.729l-74.281-62.863c-8.431-7.136-21.052-6.085-28.187,2.349c-7.135,8.434-6.083,21.055,2.349,28.191 L193.113,256l-56.238,47.593c-8.432,7.136-9.483,19.757-2.349,28.191c7.152,8.452,19.776,9.467,28.187,2.348l74.281-62.863 C246.444,263.272,246.417,248.704,236.994,240.729z" />
              <path fill="currentColor" d="M362.206,298.859h-89.995c-11.046,0-20,8.955-20,20.003c0,11.048,8.954,20.003,20,20.003h89.995 c11.045,0,20-8.955,20-20.003C382.206,307.814,373.252,298.859,362.206,298.859z" />
            </svg>
          </Link>
        </div>
      </div>
      <nav className="flex items-center">
        <ul className="flex flex-row ">
          <HeaderLink href="/contact">Contact</HeaderLink>
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