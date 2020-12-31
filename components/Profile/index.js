import { profileText } from 'data/site-data';
import React from 'react';
import SocialMediaLinks from '../SocialMediaLinks';
import WebDevImage from './WebDevImage';

export function Profile() {
  return (
    <section className="text-primary transition-colors-300">
      <div className="flex flex-wrap">
        <article className="md:w-1/2 z-10">
          <h1 className="text-5xl tracking-wide text-accent">
            Hi there!
          </h1>
          <div className="my-4 text-xl">
            <SocialMediaLinks />
          </div>
          <p className="text-xl">{profileText}</p>
        </article>
        <div className="text-accent w-full md:-mt-28 z-0">
          <WebDevImage className="md:ml-auto max-w-full" />
        </div>
      </div>
    </section>
  );
}
