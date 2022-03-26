import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CREW } from '../../../../constants';
import { spaceTourismActions } from '../../../../redux/slice';
import './CrewNavItem.css';

const CrewNavItem = ({ id }) => {
  const dispatch = useDispatch();
  const { crewId } = useSelector((state) => state);

  const clickHandler = (id) => {
    dispatch(spaceTourismActions.updateEntry({ type: CREW, id }));
  };

  return (
    <li className='crew--nav-item'>
      <button
        className={`${crewId === id ? 'active' : ''}`}
        onClick={() => {
          clickHandler(id);
        }}
      />
    </li>
  );
};

CrewNavItem.displayName = 'CrewNavItem';
export default React.memo(CrewNavItem);
