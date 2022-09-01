import Navbar from 'components/Navbar';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};
