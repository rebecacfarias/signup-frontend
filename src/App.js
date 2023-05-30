import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import { UserContext} from './context/UserContext';
import { useContext } from 'react';
import { createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: '"Work Sans", cursive', 
  },
  palette: {
    primary: {
      main: '#7747d8',
    },
  },
  components:{
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#222',
        },
      },
    },
  }
})

function App() {
  const { user } = useContext(UserContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/' element={<SignUpPage />}  />
          <Route path='/dashboard'element={user.firstName ? <Dashboard /> :  <Navigate to="/" />}  />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
