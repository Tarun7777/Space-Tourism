import React from 'react';
import { useSelector } from 'react-redux';
import { content } from '../../../../constants';
import './Destination.scoped.scss';

const Destination = () => {
  const { destinationId } = useSelector((state) => state.spaceTourism);
  return (
    <>
      <h2 className='destination--name'>
        {content?.destination?.entries?.[destinationId - 1]?.name}
      </h2>
      <p className='destination--description'>
        {content?.destination?.entries?.[destinationId - 1]?.description}
      </p>
    </>
  );
};

Destination.displayName = 'Destination';
export default Destination;
