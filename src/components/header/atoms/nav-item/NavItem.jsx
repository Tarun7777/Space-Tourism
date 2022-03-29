import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowDimensions } from '../../../../hooks/window-dimensions/useWindowDimensions';
import { path, MOBILE_MAX_WIDTH } from '../../../../constants';
import './NavItem.scoped.scss';

const NavItem = ({ prefix, value, clickHandler, shouldDisplayPrefix }) => {
  const { width } = useWindowDimensions();
  return (
    <li
      onClick={() => {
        if (width <= MOBILE_MAX_WIDTH) clickHandler();
      }}
      className='app--nav-item nav-item--text'
    >
      <NavLink
        className={(navData) => (navData.isActive ? 'active' : '')}
        to={`/${path}/${value !== 'Home' ? value.toLowerCase() : ''}`}
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
