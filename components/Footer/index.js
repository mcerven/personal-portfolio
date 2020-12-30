import SocialMediaLinks from 'components/SocialMediaLinks';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-secondaryBg text-onSecondaryBg text-sm transition-colors-300">
      <div className="container px-4 py-4 flex items-center relative">
        <div className="flex-1">Mario Cerven © 2021</div>
        <div className="text-lg"><SocialMediaLinks /></div>
      </div>
    </footer>
  );
}
