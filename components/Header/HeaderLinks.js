import React, { useState } from 'react';
import NavLink from './NavLink';
import routes from '../../data/routes';

export default function HeaderLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-end flex-wrap space-x-5 ml-3" aria-label="Header navbar" role="navigation">
      <div className={`navbar ${isOpen ? 'menu-open' : ''}`}>
        <button
          type="button"
          className="hamburger-button w-4 h-4 flex flex-col justify-between md:hidden outline-none focus:outline-none relative"
          onClick={() => setIsOpen(val => !val)}
        >
          <div className="w-full h-0.5 bg-black dark:bg-white transition"></div>
          <div className="w-full h-0.5 bg-black dark:bg-white"></div>
          <div className="w-full h-0.5 bg-black dark:bg-white transition"></div>
        </button>

        <ul className="nav-links hidden md:flex flex-row gap-5 text-primary text-base font-medium transition-colors-300">
          {routes.map(({ href, text }) =>
            <NavLink key={href} href={href}>
              <a onClick={() => setIsOpen(false)}>
                {text}
              </a>
            </NavLink>
          )}
        </ul>
        <style jsx>{`
          .navbar.menu-open .hamburger-button > div:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }

          .navbar.menu-open .hamburger-button > div:nth-child(2) {
            display: none;
          }

          .navbar.menu-open .hamburger-button > div:nth-child(3) {
            transform: rotate(-45deg) translate(4.9px, -4.9px);
          }

          .navbar.menu-open .nav-links {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: fixed;
            top: var(--header-height);
            left: 0;
            width: 100%;
            height: 100%;
            padding-top: 1rem;
            color: var(--color-primary);
            background-color: var(--color-primaryBg);
          }
        `}</style>
      </div>
    </nav>
  );
}
