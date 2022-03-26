import React from 'react';
import { useSelector } from 'react-redux';
import { content } from '../../../../constants';
import './Destination.css';

const Destination = () => {
  const { destinationId } = useSelector((state) => state);
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
