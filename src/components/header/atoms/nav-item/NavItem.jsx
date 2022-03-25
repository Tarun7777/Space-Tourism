import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = ({isMain, prefix, value, shouldDisplayPrefix }) => {
  return (
    <li className='nav-item'>
      <NavLink
        className={(navData) => (navData.isActive ? `${isMain ? 'main' : ''} active` : '')}
        to={`/${value !== 'Home' ? value.toLowerCase() : ''}`}
      >
        {shouldDisplayPrefix && <span>{prefix}</span>}
        {value.toUpperCase()}
      </NavLink>
    </li>
  );
};

NavItem.displayName = 'NavItem';
export default React.memo(NavItem);
