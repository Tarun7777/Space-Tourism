import React from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Header from './components/header/organisms/index';
import Home from './components/home/organisms/index';
import Destination from './components/destination/organisms/index';
import Crew from './components/crew/organisms/index';
import Technology from './components/technology/organisms/index'
import { HOME } from './constants';
import './App.css';
import SuperHeading from './organisms/super-heading/SuperHeading';

const App = () => {
  const route = useLocation().pathname;

  return (
    <div id='app' className={`app--${route.split('/')[1] || HOME}`}>
      <Header />
      <div className='app--content'>
        <SuperHeading />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
