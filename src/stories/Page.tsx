import React from 'react';

import { Header } from './Header';

type User = {
  name: string;
};

export const Page: React.VFC = () => {
  const [user, setUser] = React.useState<User>({ name: 'Frodo' });

  return (
    <article className="my-10">
      <Header user={user} />

      <section className="text-white my-8">
        <h2 className="mb-4 font-semibold">Pages in Storybook</h2>
        <p>We recommend building UIs with Storybook </p>
      </section>
    </article>
  );
};
