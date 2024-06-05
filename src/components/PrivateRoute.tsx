import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { getToken } from '../utils/auth';

interface PrivateRouteProps {
  path: string;
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ path, element }) => {
  const token = getToken();
  console.log(`PrivateRoute: Token is ${token}`);
  return token ? <Route path={path} element={element} /> : <Navigate to="/" />;
};

export default PrivateRoute;
