import React from 'react';
import CrewNavItems from '../../atoms/crew-nav-items/CrewNavItems';
import './CrewNavbar.css'

const CrewNavbar = () => {
  return (
    <div className='crew--navbar'>
      <CrewNavItems />
    </div>
  );
};

CrewNavbar.displayName = 'CrewNavbar';
export default React.memo(CrewNavbar);
