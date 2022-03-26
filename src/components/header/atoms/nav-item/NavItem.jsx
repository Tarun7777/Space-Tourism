import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DESTINATION } from '../../../../constants';
import { spaceTourismActions } from '../../../../redux/slice';
import './NavItem.css';

const NavItem = ({ isMain, prefix, value, id, name, shouldDisplayPrefix, path }) => {
  const dispatch = useDispatch();
  const { destinationId } = useSelector((state) => state);
  const clickHandler = (id) => {
    console.log(id)
    dispatch(spaceTourismActions.updateEntry({ type: DESTINATION, id }));
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
            clickHandler(id);
          }}
          className={`${destinationId === id ? 'active' : ''}`}
        >
          {name}
        </button>
      )}
    </li>
  );
};

NavItem.displayName = 'NavItem';
export default React.memo(NavItem);
