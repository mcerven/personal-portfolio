import React from 'react';
import SocialMediaLinks from 'components/SocialMediaLinks';
import { footerText } from 'data/site-data';
import NavLink from './NavLink';
import routes from '../../data/routes';

export function Footer() {
  return (
    <footer className="bg-secondaryBg text-onSecondaryBgSecondary text-sm transition-colors-300">
      <div className="container py-8 flex flex-col">
        <div className="flex mb-8">
          <nav className="flex flex-col space-y-2" aria-label="Footer navbar" role="navigation">
            <h3 className="text-onSecondaryBgPrimary uppercase">Internal links</h3>
            <ul className="space-y-1">
              { routes.map(({href, text}) => 
                <NavLink key={href} href={href}>{text}</NavLink>
              )}
            </ul>
          </nav>
        </div>
        <div className="flex">
          <div className="flex-1">{footerText}</div>
          <div className="text-lg"><SocialMediaLinks /></div>
        </div>
      </div>
    </footer>
  );
}
