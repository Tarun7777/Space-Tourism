import React from 'react';
import Helmet from 'react-helmet';
import LeftPanel from '../molecules/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import { TITLE_TECHNOLOGY } from '../../../constants';
import './index.css';

const Technology = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE_TECHNOLOGY}</title>
      </Helmet>
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
