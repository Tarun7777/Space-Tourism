import React from 'react';
import NavItem from '../nav-item/NavItem';
import { content } from '../../../../constants';
import './NavItems.css';

const navItems = content?.main?.navItems;

const NavItems = ({ shouldDisplayPrefix }) => {
  return (
    <ul className='app--nav-items flex'>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          prefix={item?.prefix}
          value={item?.value}
          shouldDisplayPrefix={shouldDisplayPrefix}
        />
      ))}
    </ul>
  );
};

NavItems.displayName = 'NavItems';
export default NavItems;