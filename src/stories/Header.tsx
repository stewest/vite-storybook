import React from 'react';

import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
}

export const Header = ({ user }: HeaderProps) => (
  <header>
    <div className="text-xl text-blue-600">
      <div>
        {user ? (
          <>
            Welcome, <b>{user.name}</b>!
          </>
        ) : (
          <>Welcome</>
        )}
      </div>
    </div>
  </header>
);
