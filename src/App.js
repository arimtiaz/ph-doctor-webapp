import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './Pages/Error';
import Home from './Pages/Home/Home';
import Service from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import SignUp from './Pages/SignUp/SignUp';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='*' element={<Error></Error>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Service></Service>}></Route>
        <Route path= '/signup' element={<SignUp></SignUp>}></Route>
        <Route path= '/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};

export default App;