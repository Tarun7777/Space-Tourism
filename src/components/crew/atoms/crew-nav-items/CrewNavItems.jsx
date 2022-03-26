import React from 'react';
import { content } from '../../../../constants';
import CrewNavItem from '../crew-nav-item/CrewNavItem';
import './CrewNavItems.css';

const CrewNavItems = () => {
  const items = content?.crew?.entries;
  return (
    <ul className='crew--nav-items'>
      {items.map((item) => (
        <CrewNavItem key={item?.id} id={item?.id} />
      ))}
    </ul>
  );
};

CrewNavItems.displayName = 'CrewNavItems';
export default React.memo(CrewNavItems);
