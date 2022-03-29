import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Header from './components/header/organisms/index';
import SuperHeading from './organisms/super-heading/SuperHeading';
import { getLastSegmentOfPath, getTitle } from './utils/utils';
import { path } from './constants';
import './App.scoped.scss';

const Home = React.lazy(() => import('./components/home/organisms/index'));
const Destination = React.lazy(() =>
  import('./components/destination/organisms/index')
);
const Crew = React.lazy(() => import('./components/crew/organisms/index'));
const Technology = React.lazy(() =>
  import('./components/technology/organisms/index')
);

const App = () => {
  const route = getLastSegmentOfPath(useLocation().pathname);

  return (
    <div id='app' className={`app--${route}`}>
      <Helmet>
        <title>{getTitle(route)}</title>
      </Helmet>
      <Header />
      <div className='app--content'>
        <SuperHeading />
        <Routes>
          <Route path={path}>
            <Route path='' element={<Home />} />
            <Route path='destination' element={<Destination />} />
            <Route path='crew' element={<Crew />} />
            <Route path='technology' element={<Technology />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Route>
          <Route path='*' element={<Navigate to={path + '/'} replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
