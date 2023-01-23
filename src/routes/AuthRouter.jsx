import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';

const AuthRouter = () => {
  return (
    <Routes>
      <Route element={<NotificactionRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
