import React, { useState } from 'react';
import NavLink from './NavLink';
import routes from '../../data/routes';

export default function HeaderLinks() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-end flex-wrap space-x-5" aria-label="Header navbar" role="navigation">
      <button
        type="button"
        className="hamburger-button md:hidden outline-none focus:outline-none"
        onClick={() => setIsOpen(val => !val)}
      >
        <div className="w-5 h-0.5 mt-1 bg-black dark:bg-white"></div>
        <div className="w-5 h-0.5 mt-1 bg-black dark:bg-white"></div>
        <div className="w-5 h-0.5 mt-1 bg-black dark:bg-white"></div>
      </button>

      <div className={`nav-links ${isOpen ? 'menu-open' : ''}`}>
        <ul className="hidden md:flex flex-row gap-5 text-primary text-base font-medium transition-colors-300">
          {routes.map(({ href, text }) =>
            <NavLink key={href} href={href}>
              <a onClick={() => setIsOpen(false)}>
                {text}
              </a>
            </NavLink>
          )}
        </ul>
      </div>
      <style jsx>{`
        .nav-links.menu-open ul {
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
    </nav>
  );
}
