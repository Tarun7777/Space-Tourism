import React from 'react';
import LeftPanel from '../molecules/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import './index.scoped.scss';

const Crew = () => {
  return (
    <section className='crew'>
      <div className='crew--left-panel'>
        <LeftPanel />
      </div>
      <div className='crew--right-panel'>
        <RightPanel />
        <hr />
      </div>
    </section>
  );
};

Crew.displayName = 'Crew';
export default React.memo(Crew);
