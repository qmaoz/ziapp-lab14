import './App.css';

// components
import Header from './components/Header.jsx';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';

function App() {
  return (
    <>
      <Header />
      <RegisterForm />
      {/* <LoginForm /> */}
    </>
  );
}

export default App;