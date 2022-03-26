import React from 'react';
import { content } from '../../../../constants';
import DestinationNavItem from '../destination-nav-item/DestinationNavItem';
import './DestinationNavItems.css';

const DestinationNavItems = () => {
  const items = content?.destination?.entries;
  return (
    <ul className='destination--nav-items'>
      {items.map((item) => (
        <DestinationNavItem key={item?.id} id={item?.id} name={item?.name} />
      ))}
    </ul>
  );
};

DestinationNavItems.displayName = 'DestinationNavItems';
export default React.memo(DestinationNavItems);
