import React from 'react';
import LeftPanel from '../molecules/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import './index.scoped.scss';

const Technology = () => {
  return (
    <section className='technology'>
      <div className='technology--left-panel'>
        <LeftPanel />
      </div>
      <div className='technology--right-panel'>
        <RightPanel />
      </div>
    </section>
  );
};

Technology.displayName = 'Technology';
export default React.memo(Technology);
