import React from 'react';
import TechnologyNavItem from '../tehcnology-nav-item/TechnologyNavItem';
import { content } from '../../../../constants';
import './TechnologyNavItems.scoped.scss';

const navItems = content?.technology?.entries;

const TechnologyNavItems = () => {
  return (
    <ul className='technology--nav-items'>
      {navItems.map((item) => (
        <TechnologyNavItem key={item?.id} id={item?.id} />
      ))}
    </ul>
  );
};

TechnologyNavItems.displayName = 'TechnologyNavItems';
export default React.memo(TechnologyNavItems);
