import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/dashboard/home/Home';

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};
