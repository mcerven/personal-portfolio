import React from 'react';
import SocialMediaLinks from '../SocialMediaLinks';

export function Profile() {
  return (
    <section className="text-primary transition-colors-300">
      <div className="flex md:flex-row flex-wrap justify-center">
        <figure className="md:w-1/3">
          <img className="rounded-full w-60 md:w-80" src="/assets/images/profile/profile-picture.jpg" alt="Profile picture" />
        </figure>
        <article className="w-2/3 pl-8">
          <h1 className="text-5xl text-accent tracking-wide">
            Hello, I'm Mario Cerven
          </h1>
          <div className="my-4 text-2xl text-accent">
            <SocialMediaLinks />
          </div>
          <p>I'm a full-stack web developer working remotely from Slovakia.</p>
        </article>
      </div>
    </section>
  );
}
