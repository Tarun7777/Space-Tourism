import React from 'react';
import LeftPanel from '../molecules/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import './index.scoped.scss';

const Destination = () => {
  return (
    <section className='destination'>
      <div className='destination--left-panel'>
        <LeftPanel />
      </div>
      <div className='destination--right-panel'>
        <RightPanel />
      </div>
    </section>
  );
};

Destination.displayName = 'Destination';
export default React.memo(Destination);
