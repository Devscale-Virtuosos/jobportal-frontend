import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <main>
      <p>Auth Layout</p>
      <Outlet />
    </main>
  );
};
