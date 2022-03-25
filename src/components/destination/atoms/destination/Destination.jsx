import React from 'react';
import { content } from '../../../../constants';
import './Destination.css'

const Destination = ({ name }) => {
  return (
    <>
      <h2 className='destination--heading'>{content?.destination?.entries?.[name]?.name}</h2>
      <p>{content?.destination?.entries?.[name]?.description}</p>
    </>
  );
};

Destination.displayName = 'Destination';
export default Destination;
