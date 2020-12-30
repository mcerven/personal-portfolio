import React from 'react';
import SocialMediaLinks from '../SocialMediaLinks';

export function Profile() {
  return (
    <section className="text-primary transition-colors-300">
      <div className="flex md:flex-row flex-wrap">
        <article className="w-2/3">
          <h1 className="text-5xl text-accent tracking-wide">
            Hi there!
          </h1>
          <div className="my-4 text-2xl text-accent">
            <SocialMediaLinks />
          </div>
          <p>I'm Mario Cerven and I am a web developer. I work remotely from Slovakia.</p>
        </article>
      </div>
    </section>
  );
}
