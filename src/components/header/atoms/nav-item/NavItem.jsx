import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = ({ isMain, prefix, value, shouldDisplayPrefix, path }) => {
  return (
    <li className='nav-item'>
      <NavLink
        className={(navData) =>
          navData.isActive ? `${isMain ? 'main' : ''} active` : ''
        }
        to={`${path}/${
          value !== 'Home' ? value.toLowerCase() : ''
        }`}
      >
        {shouldDisplayPrefix && <span>{prefix}</span>}
        {value}
      </NavLink>
    </li>
  );
};

NavItem.displayName = 'NavItem';
export default React.memo(NavItem);
