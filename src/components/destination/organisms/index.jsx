import React from 'react';
import { useLocation } from 'react-router-dom';
import LeftPanel from '../atoms/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import { MOON } from '../../../constants';
import { getLastSegmentOfPath } from '../../../utils/utils';
import './index.css';

const Destination = () => {
    const name = getLastSegmentOfPath(useLocation().pathname) || MOON;

  return (
    <section className='destination'>
      <div className='destination--left-panel'>
        <LeftPanel name={name} />
      </div>
      <div className='destination--right-panel'>
        <RightPanel name={name} />
      </div>
    </section>
  );
};

Destination.displayName = 'Destination';
export default React.memo(Destination);
