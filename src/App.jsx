import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Header from './components/header/organisms/index';
import SuperHeading from './organisms/super-heading/SuperHeading';
import Home from './components/home/organisms/index';
import Destination from './components/destination/organisms/index';
import Crew from './components/crew/organisms/index';
import Technology from './components/technology/organisms/index';
import { getLastSegmentOfPath, getTitle } from './utils/utils';
import './App.scoped.scss';

const App = () => {
  const route = getLastSegmentOfPath(useLocation().pathname);

  return (
    <div id='app' className={`app--${route}`}>
      <Helmet>{getTitle(route)}</Helmet>
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
