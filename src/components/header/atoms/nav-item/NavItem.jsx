import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = ({ prefix, value, shouldDisplayPrefix }) => {
  return (
    <li className='app--nav-item nav-item--text'>
      <NavLink
        className={(navData) => (navData.isActive ? 'active' : '')}
        to={`/${value !== 'Home' ? value.toLowerCase() : ''}`}
      >
        {shouldDisplayPrefix && (
          <span className={`${prefix ? 'prefix' : ''}`}>{prefix}</span>
        )}
        {value}
      </NavLink>
    </li>
  );
};

NavItem.displayName = 'NavItem';
export default React.memo(NavItem);
