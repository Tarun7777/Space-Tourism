import React from 'react';
import { content } from '../../../../constants';
import Header from '../../../header/organisms/index';
import DestinationDetails from '../../atoms/destination-detail/DestinationDetails';
import Destination from '../../atoms/destination/Destination';

const RightPanel = () => {
  
  return (
    <>
      <Header
        navItems={content?.main?.destinationNavItems}
        path='/destination'
      />
      <Destination />
      <DestinationDetails />
    </>
  );
};

RightPanel.displayName = 'RightPanel';
export default React.memo(RightPanel);
