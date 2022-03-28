import React from 'react';
import Helmet from 'react-helmet';
import LeftPanel from '../molecules/left-panel/LeftPanel';
import RightPanel from '../molecules/right-panel/RightPanel';
import { TITLE_CREW } from '../../../constants';
import './index.css';

const Crew = () => {
  return (
    <>
      <Helmet>
        <title>{TITLE_CREW}</title>
      </Helmet>
      <section className='crew'>
        <div className='crew--left-panel'>
          <LeftPanel />
        </div>
        <div className='crew--right-panel'>
          <RightPanel />
          <hr />
        </div>
      </section>
    </>
  );
};

Crew.displayName = 'Crew';
export default React.memo(Crew);
