import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/shared/layout';
import HomePage from '@/features/home';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
