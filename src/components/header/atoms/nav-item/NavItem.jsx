import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DESTINATION } from '../../../../constants';
import { spaceTourismActions } from '../../../../redux/slice';
import './NavItem.css';

const NavItem = ({ isMain, prefix, value, shouldDisplayPrefix, path }) => {
  const dispatch = useDispatch();
  const { destination } = useSelector((state) => state);
  const clickHandler = (value) => {
    dispatch(spaceTourismActions.updateEntry({ type: DESTINATION, value }));
  };

  return (
    <li className={`nav-item ${isMain ? 'main' : ''}`}>
      {isMain ? (
        <NavLink
          className={(navData) => (navData.isActive ? 'active' : '')}
          to={`${path}/${value !== 'Home' ? value.toLowerCase() : ''}`}
        >
          {shouldDisplayPrefix && (
            <span className={`${prefix ? 'nav-item--prefix' : ''}`}>
              {prefix}
            </span>
          )}
          {value}
        </NavLink>
      ) : (
        <button
          onClick={() => {
            clickHandler(value.toLowerCase());
          }}
          className={`${destination === value.toLowerCase() ? 'active' : ''}`}
        >
          <span className={`${prefix ? 'nav-item--prefix' : ''}`}>
            {prefix}
          </span>
          {value}
        </button>
      )}
    </li>
  );
};

NavItem.displayName = 'NavItem';
export default React.memo(NavItem);
