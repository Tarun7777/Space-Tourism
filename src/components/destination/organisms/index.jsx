import React from 'react';
import Helmet from 'react-helmet';
import LeftPanel from '../molecules/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import { TITLE_DESTINATION } from '../../../constants';
import './index.css';

const Destination = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE_DESTINATION}</title>
      </Helmet>
      <section className='destination'>
        <div className='destination--left-panel'>
          <LeftPanel />
        </div>
        <div className='destination--right-panel'>
          <RightPanel />
        </div>
      </section>
    </>
  );
};

Destination.displayName = 'Destination';
export default React.memo(Destination);
