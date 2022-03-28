import React from 'react';
import { useLocation } from 'react-router-dom';
import { getLastSegmentOfPath } from '../../utils/utils';
import { content, HOME } from '../../constants';
import './SuperHeading.scoped.scss';

const SuperHeading = () => {
  const route = getLastSegmentOfPath(useLocation().pathname);

  return (
    <h5
      className={`app--super-heading ${
        route === HOME ? 'home--super-heading' : ''
      }`}
    >
      <span className='prefix'>
        {content?.main?.superHeadings?.[route]?.prefix}
      </span>
      {content?.main?.superHeadings?.[route]?.value}
    </h5>
  );
};

SuperHeading.displayName = 'SuperHeading';
export default React.memo(SuperHeading);
