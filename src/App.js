import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/HomePage/Home';
import Checkout from './components/Checkout';


const App = () => (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Signup} />
          <Route exact path="/home" Component={Home} />
          <Route exact path="/checkout" Component={Checkout} />
        </Routes>
    </BrowserRouter>
);

export default App;
