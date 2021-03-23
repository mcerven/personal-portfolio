import React from 'react';
import SocialMediaLink from './SocialMediaLink';
import LinkedinIcon from './LinkedinIcon';
import GithubIcon from './GithubIcon';
import CssBattleIcon from './CssBattleIcon';

export default function SocialMediaLinks() {
  return (
    <div className="flex flex-wrap space-x-2.5">
      <SocialMediaLink title="LinkedIn" href="https://linkedin.com/in/mariocerven">
        <LinkedinIcon style={{ width: '1em' }} />
      </SocialMediaLink>
      <SocialMediaLink title="GitHub" href="https://github.com/mcerven">
        <GithubIcon style={{ width: '1em' }} />
      </SocialMediaLink>
      <SocialMediaLink title="CSS Battle" href="https://cssbattle.dev/player/mcerven">
        <CssBattleIcon style={{ width: '1em' }} />
      </SocialMediaLink>
    </div>
  );
}
