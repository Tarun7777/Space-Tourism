import React from 'react';
import { useSelector } from 'react-redux';
import { content } from '../../../../constants';
import './CrewDetails.scoped.scss';

const CrewDetails = () => {
  const { crewId } = useSelector((state) => state.spaceTourism);
  const index = crewId - 1;

  return (
    <div className='crew--details'>
      <h4>{content?.crew?.entries?.[index]?.role}</h4>
      <h3>{content?.crew?.entries?.[index]?.name}</h3>
      <p>{content?.crew?.entries?.[index]?.bio}</p>
    </div>
  );
};

CrewDetails.displayName = 'CrewDetails';
export default React.memo(CrewDetails);
