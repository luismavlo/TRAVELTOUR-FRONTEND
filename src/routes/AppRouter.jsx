import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Landing } from '../pages/Landing/Landing';
import AuthRouter from './AuthRouter';
import { DashboardRouter } from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="*" element={<Landing />} />
        </Route>

        <Route
          path="/auth/*"
          element={
            <PublicRouter isAuthenticated={false}>
              <AuthRouter />
            </PublicRouter>
          }
        />

        <Route
          path="/traveltour/*"
          element={
            <PrivateRouter>
              <DashboardRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </HashRouter>
  );
};
