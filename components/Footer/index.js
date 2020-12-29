import SocialMediaLinks from 'components/SocialMediaLinks';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-secondaryBg text-onSecondaryBg transition-colors-300">
      <div className="container px-4 py-4 flex items-center text-sm relative">
        <div className="flex-1">Made with ♥ by Mario Cerven © 2021</div>
        <div><SocialMediaLinks /></div>
      </div>
    </footer>
  );
}
