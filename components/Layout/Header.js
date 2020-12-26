import React from 'react';
import Link from 'next/link';

export default function Header({isDarkTheme, setIsDarkTheme}) {
  const imageUrl = isDarkTheme 
    ? "https://www.flaticon.com/svg/static/icons/svg/1829/1829191.svg"
    : "https://www.flaticon.com/svg/static/icons/svg/1829/1829241.svg";

  return (
    <div className="py-4 flex flex-row items-center">
      <div className="flex-grow text-accent">Logo</div>
      <nav className="flex items-center">
        <button
          aria-label="Toggle dark mode"
          className="w-5 h-5 focus:outline-none"
          onClick={() => setIsDarkTheme(value => !value)}
          >
            <img src={imageUrl} alt="Brightness" />
        </button>
        <ul className="flex flex-row">
          <HeaderLink href="/">Home</HeaderLink>
          <HeaderLink href="/about">About</HeaderLink>
        </ul>
      </nav>
    </div>
  )
}

function HeaderLink({children, ...props}) {
  return (
    <li className="ml-5 text-primary text-base font-medium border-transparent border-b-2 hover:border-accent">
      <Link {...props}>{children}</Link>
    </li>
  );
}

