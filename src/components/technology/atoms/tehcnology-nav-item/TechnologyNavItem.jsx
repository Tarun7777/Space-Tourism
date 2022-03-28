import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TECHNOLOGY } from '../../../../constants';
import { spaceTourismActions } from '../../../../redux/slice';
import './TechnologyNavItem.css';

const TechnologyNavItem = ({ id }) => {
  const dispatch = useDispatch();
  const { technologyId } = useSelector((state) => state);

  const clickHandler = () => {
    dispatch(spaceTourismActions.updateEntry({ type: TECHNOLOGY, id }));
  };

  return (
    <li className='technology--nav-item'>
      <button
        className={`${technologyId === id ? 'active' : ''}`}
        onClick={clickHandler}
      >
        {id}
      </button>
    </li>
  );
};

TechnologyNavItem.displayName = 'TechnologyNavItem';
export default React.memo(TechnologyNavItem);
