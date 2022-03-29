import React from 'react';
import NavItem from '../nav-item/NavItem';
import { content } from '../../../../constants';
import './NavItems.scoped.scss';

const navItems = content?.main?.navItems;

const NavItems = ({ clickHandler, shouldDisplayPrefix }) => {
  return (
    <ul className='app--nav-items flex'>
      {navItems.map((item, index) => (
        <NavItem
          key={index}
          prefix={item?.prefix}
          value={item?.value}
          clickHandler={clickHandler}
          shouldDisplayPrefix={shouldDisplayPrefix}
        />
      ))}
    </ul>
  );
};

NavItems.displayName = 'NavItems';
export default NavItems;
