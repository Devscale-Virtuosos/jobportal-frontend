import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main>
      <p>Layout</p>
      <Outlet />
    </main>
  );
};
