
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes, Link,BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import About from './pages/About';
import Services from './pages/Services';
import Policies from './pages/Policies';
import Contact from './pages/Contact';
import Transaction from './pages/Transaction';
import Money_Transfer from './pages/Money_Transfer';
import Home_Before_Log from './pages/Home_Before_Log';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home_Before_Log />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/policies' element={<Policies />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/transaction' element={<Transaction />}/>
        <Route path='/money_transfer' element={<Money_Transfer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
