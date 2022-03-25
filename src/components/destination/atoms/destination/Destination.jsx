import React from 'react';
import { content } from '../../../../constants';

const Destination = ({ name }) => {
  return (
    <>
      <h2>{content?.destination?.entries?.[name]?.name}</h2>
      <p>{content?.destination?.entries?.[name]?.description}</p>
    </>
  );
};

Destination.displayName = 'Destination';
export default Destination;
