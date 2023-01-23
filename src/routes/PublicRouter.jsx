import { Navigate } from 'react-router-dom';

const PublicRouter = ({ children, isAuthenticated }) => {
  return !isAuthenticated ? children : <Navigate to="/traveltour/home" />;
};

export default PublicRouter;
