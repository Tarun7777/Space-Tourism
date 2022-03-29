import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spaceTourismActions } from '../../../../redux/slice/spaceTourism';
import { CREW } from '../../../../constants';
import './CrewNavItem.scoped.scss';

const CrewNavItem = ({ id }) => {
  const dispatch = useDispatch();
  const { crewId } = useSelector((state) => state.spaceTourism);

  const clickHandler = () => {
    dispatch(spaceTourismActions.updateEntry({ type: CREW, id }));
  };

  return (
    <li className='crew--nav-item'>
      <button
        className={`${crewId === id ? 'active' : ''}`}
        onClick={clickHandler}
      />
    </li>
  );
};

CrewNavItem.displayName = 'CrewNavItem';
export default React.memo(CrewNavItem);
