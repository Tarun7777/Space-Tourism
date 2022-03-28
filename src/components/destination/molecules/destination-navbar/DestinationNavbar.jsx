import React from 'react';
import DestinationNavItems from '../../atoms/destination-nav-items/DestinationNavItems';
import './DestinationNavbar.scoped.scss';

const DestinationNavbar = () => {
  return (
    <div className='destination--navbar'>
      <DestinationNavItems />
    </div>
  );
};

DestinationNavbar.displayName = 'DestinationNavbar';
export default React.memo(DestinationNavbar);
