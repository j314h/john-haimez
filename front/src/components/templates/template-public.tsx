import React from 'react';
import { Outlet } from 'react-router-dom';

export function TemplatePublic() {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}
