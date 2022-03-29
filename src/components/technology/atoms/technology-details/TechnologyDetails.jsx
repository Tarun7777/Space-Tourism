import React from 'react';
import { useSelector } from 'react-redux';
import { content } from '../../../../constants';
import './TechnologyDetails.scoped.scss';

const TechnologyDetails = () => {
  const { technologyId } = useSelector((state) => state.spaceTourism);

  return (
    <div className='technology--details'>
      <p className='terminology'>{content?.technology?.common?.heading}</p>
      <h3>{content.technology.entries[technologyId - 1].name}</h3>
      <p>{content.technology.entries[technologyId - 1].description}</p>
    </div>
  );
};

TechnologyDetails.displayName = 'TechnologyDetails';
export default React.memo(TechnologyDetails);
