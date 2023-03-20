import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ConvertPage from './pages/ConvertPage';
import Login from 'pages/LoginSpotify';
import Callback from 'pages/Callback';
function App() {
	return (
		<Router>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/home" element={<ConvertPage />} />
				<Route path="/callback" element={<Callback />} />
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</Router>
	);
}

export default App;
