import React from 'react';
import TechnologyNavItems from '../../atoms/technology-nav-items/TechnologyNavItems';

const TechnologyNavbar = () => {
  return (
    <div className='technology--navbar'>
      <TechnologyNavItems />
    </div>
  );
};

TechnologyNavbar.displayName = 'TechnologyNavbar';
export default React.memo(TechnologyNavbar);
