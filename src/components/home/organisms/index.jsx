import React from 'react';
import LeftPanel from '../atoms/left-panel/LeftPanel';
import RightPanel from '../atoms/right-panel/RightPanel';
import './index.css';

const Home = () => {
  return (
    <section className='home'>
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
