import React from 'react';
import { useLocation } from 'react-router-dom';
import { content, HOME } from '../../constants';
import './SuperHeading.css';

const SuperHeading = () => {
  const route = useLocation().pathname.split('/')[1] || HOME;

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
