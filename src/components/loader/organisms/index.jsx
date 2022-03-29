import React from 'react';
import './index.scoped.scss';

const Loader = () => {
  return (
    <div className='app--loader'>
      <div className='loading'>
        <div className='arc'></div>
        <div className='arc'></div>
        <div className='arc'></div>
      </div>
    </div>
  );
};

Loader.displayName = 'Loader';
export default React.memo(Loader);
