import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import { UserContext, UserProvider } from './context/UserContext';
import { useContext } from 'react';


function App() {
  const { user } = useContext(UserContext);

  return (
      <Router>
        <Routes>
          <Route path='/' element={<SignUpPage />}  />
          <Route path='/dashboard'element={user.firstName ? <Dashboard /> :  <Navigate to="/" />}  />
        </Routes>
      </Router>
  );
}

export default App;
