import React from 'react';
import Helmet from 'react-helmet';
import LeftPanel from '../molecules/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import { TITLE_HOME } from '../../../constants';
import './index.css';

const Home = () => {
  return (
    <section className='home'>
      <Helmet>
        <title>{TITLE_HOME}</title>
      </Helmet>
      <div className='home--left-panel'>
        <LeftPanel />
      </div>
      <div className='home--right-panel'>
        <RightPanel />
      </div>
    </section>
  );
};

Home.displayName = 'Home';
export default React.memo(Home);
