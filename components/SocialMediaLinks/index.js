import React from 'react';
import SocialMediaLink from './SocialMediaLink';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';

export default function SocialMediaLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      <SocialMediaLink title="LinkedIn" href="https://linkedin.com/in/mariocerven">
        <LinkedinIcon />
      </SocialMediaLink>
      <SocialMediaLink title="GitHub" href="https://github.com/mcerven">
        <GithubIcon />
      </SocialMediaLink>
    </div>
  );
}
