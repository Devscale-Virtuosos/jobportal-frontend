import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/shared/navbar';
import { Toaster } from '@/components/ui/toaster';

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Toaster />
    </>
  );
};
