import SocialMediaLinks from 'components/SocialMediaLinks';
import { footerText } from 'data/site-data';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-secondaryBg text-onSecondaryBg text-sm transition-colors-300">
      <div className="container px-4 py-4 flex items-center relative">
        <div className="flex-1">{footerText}</div>
        <div className="text-lg"><SocialMediaLinks /></div>
      </div>
    </footer>
  );
}
