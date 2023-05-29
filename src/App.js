import './App.css';

import SignUpForm from './components/signup-form';
import SignUpPage from './pages/signup-page';

const useStyles = (theme => ({
  page: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50%'
  },
  form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent:'center'
  }
}))

function App() {

  return (
    <SignUpPage/>
  );
}

export default App;
