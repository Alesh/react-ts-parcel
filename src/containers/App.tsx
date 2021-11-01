import React from 'react';
import Logo from '~/src/assets/logo.svg';
import { ExtLink } from '~/src/components/ExtLink';

export function App() {
  return (
    <div className="container mx-auto h-screen flex flex-wrap content-center">
      <div className="container mx-auto flex flex-col justify-center">
        <Logo className="h-96" />
        <p className="mx-auto text-2xl">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ExtLink className="mx-auto text-2xl text-blue-900 hover:text-blue-600" href="https://reactjs.org">
          Learn React
        </ExtLink>
      </div>
    </div>
  );
}
