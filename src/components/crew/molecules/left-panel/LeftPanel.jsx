import React from 'react';
import { content } from '../../../../constants';
import './LeftPanel.css';

const LeftPanel = ({ name }) => {
  return (
    <>
      <h5 className='destination--super-heading'>
        <span>{content?.main?.superHeadings?.destination?.prefix}</span>
        {content?.main?.superHeadings?.destination?.value}
      </h5>
    </>
  );
};

LeftPanel.displayName = 'LeftPanel';
export default React.memo(LeftPanel);
