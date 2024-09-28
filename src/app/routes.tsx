import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/shared/layout';
import { AuthLayout } from '@/components/shared/layout-auth';
import HomePage from '@/features/home';
import LoginPage from '@/features/authentication/login';
import RegisterPage from '@/features/authentication/register';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
