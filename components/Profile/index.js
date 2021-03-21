import { welcomeText } from 'data/site-data';
import React from 'react';
import SocialMediaLinks from '../SocialMediaLinks';
import WebDevImage from './WebDevImage';

export default function Profile() {
  return (
    <section className="text-primary transition-colors-300">
      <div className="flex flex-wrap">
        <article className="md:w-1/2 z-10">
          <h1 className="text-6xl font-light tracking-wide text-accent">
            Hi there!
          </h1>
          <div className="my-4 text-2xl">
            <SocialMediaLinks />
          </div>
          <p className="text-3xl font-light">{welcomeText}</p>
        </article>
        <div className="text-accent w-full md:-mt-28 z-0">
          <WebDevImage className="md:ml-auto max-w-full" />
        </div>
      </div>
    </section>
  );
}
