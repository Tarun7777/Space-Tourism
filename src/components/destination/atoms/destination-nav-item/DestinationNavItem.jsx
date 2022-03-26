import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DESTINATION } from '../../../../constants';
import { spaceTourismActions } from '../../../../redux/slice';
import './DestinationNavItem.css';

const DestinationNavItem = ({ id, name }) => {
  const dispatch = useDispatch();
  const { destinationId } = useSelector((state) => state);

  const clickHandler = (id) => {
    dispatch(spaceTourismActions.updateEntry({ type: DESTINATION, id }));
  };

  return (
    <li className='destination--nav-item nav-item--text'>
      <button
        className={`${destinationId === id ? 'active' : ''}`}
        onClick={() => {
          clickHandler(id);
        }}
      >
        {name}
      </button>
    </li>
  );
};

DestinationNavItem.displayName = 'DestinationNavItem';
export default React.memo(DestinationNavItem);
