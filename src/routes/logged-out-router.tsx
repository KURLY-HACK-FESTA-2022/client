import LoginPage from 'pages/LoginPage';
import NotFoundPage from 'pages/NotFoundPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CreateAccount } from '../pages/CreateAccountPage';

export const LoggedOutRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/create-account"
          element={<CreateAccount></CreateAccount>}
        ></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </>
  );
};
