import React from 'react';
import LeftPanel from '../molecules/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import './index.css';

const Technology = () => {
  return (
    <>
      <div className='technology'>
        <div className='technology--left-panel'>
          <LeftPanel />
        </div>
        <div className='technology--right-panel'>
          <RightPanel />
        </div>
      </div>
    </>
  );
};

Technology.displayName = 'Technology';
export default React.memo(Technology);
