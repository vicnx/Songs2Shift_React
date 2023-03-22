import { Route, Routes, Navigate } from 'react-router-dom';
import ConvertPage from './pages/ConvertPage';
import Login from 'pages/LoginSpotify/LoginSpotify';
import LoginDeezer from 'pages/LoginDeezer/LoginDeezer';
import { CONSTANTS } from 'global/constants';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to={CONSTANTS.routes.login} replace />;
  }
  return children;
};

function SSRouter({ isAuthenticated }) {
	return (
		<Routes>
			<Route path={CONSTANTS.routes.home} element={<ProtectedRoute isAuthenticated={isAuthenticated}><ConvertPage /></ProtectedRoute>}  />
			<Route path={CONSTANTS.routes.loginDeezer} element={<ProtectedRoute isAuthenticated={isAuthenticated}><LoginDeezer /></ProtectedRoute>}/>
			<Route path="*" element={<Navigate to={CONSTANTS.routes.home} replace />} />
			<Route path={CONSTANTS.routes.login} element={<Login />} />
		</Routes>
	);
}

export default SSRouter;
