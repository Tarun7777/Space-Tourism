import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header/organisms/index';
import Home from './components/home/organisms/index';
import { HOME } from './constants';
import './App.css';

const App = () => {
  const route = useLocation().pathname.replace('/', '');

  return (
    <div id='app' className={`app--${route || HOME}`}>
      <Header isMain />
      <div className='app--content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' />
          <Route path='/crew' />
          <Route path='/technology' />
          <Route path='*' />
        </Routes>
      </div>
    </div>
  );
};

export default App;
