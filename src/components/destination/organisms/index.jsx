import React from 'react';
import './index.css';

const Destination = () => {
  return (
    <section className='destination'>
      <div className='destination--left-panel'></div>
      <div className='destination--right-panel'></div>
    </section>
  );
};

Destination.displayName = 'Destination';
export default React.memo(Destination);
