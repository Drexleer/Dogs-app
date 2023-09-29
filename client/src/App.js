import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import LandingPage from './components/LandingPage/LandingPage';
//import Nav from './Nav/Nav';
import Detail from './components/Views/Detail';
import About from './components/Views/About';
import NewDog from './components/Views/NewDog';
import Error404 from './components/Utils/error404';

function App() {

  //const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate()

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/login';
    axios(`${URL}?email=${email}&password=${password}`)
      .then(({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate('/home')
      })
  }
  // useEffect(() => {
  //   !access && navigate('/');
  // }, [access]);

  return (
    <div className="App">
      {/* {pathname !== '/' && pathname !== '/login' && <Nav/>} */}
      <Routes>
        <Route path='/login' element={<Login login={login} />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/home/:id' element={<Detail/>} />
        <Route path='/home/about' element={<About/>} />
        <Route path='*' element={<Error404/>}/>
        <Route path='/home/newDog' element={<NewDog/>} />
      </Routes>
    </div>
  );
}

export default App;
