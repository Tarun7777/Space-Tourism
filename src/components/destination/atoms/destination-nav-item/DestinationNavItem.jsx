import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spaceTourismActions } from '../../../../redux/slice/spaceTourism';
import { DESTINATION } from '../../../../constants';
import './DestinationNavItem.scoped.scss';

const DestinationNavItem = ({ id, name }) => {
  const dispatch = useDispatch();
  const { destinationId } = useSelector((state) => state.spaceTourism);

  const clickHandler = () => {
    dispatch(spaceTourismActions.updateEntry({ type: DESTINATION, id }));
  };

  return (
    <li className='destination--nav-item nav-item--text'>
      <button
        className={`${destinationId === id ? 'active' : ''}`}
        onClick={clickHandler}
      >
        {name}
      </button>
    </li>
  );
};

DestinationNavItem.displayName = 'DestinationNavItem';
export default React.memo(DestinationNavItem);
