import logo from './logo.svg';
import './App.css';
import CustomNavbar from './Components/Nav';
import { Container } from 'react-bootstrap';
import Login from './Components/Login';

function App() {
  return (
    <div className="container App">
      <CustomNavbar/>
      <Login/>
    </div>
  );
}

export default App;
