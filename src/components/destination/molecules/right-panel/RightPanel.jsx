import React from 'react';
import { content } from '../../../../constants';
import Header from '../../../header/organisms/index';
import DestinationDetails from '../../atoms/destination-detail/DestinationDetails';
import Destination from '../../atoms/destination/Destination';

const RightPanel = ({ name }) => {
  return (
    <>
      <Header
        navItems={content?.main?.destinationNavItems}
        path='/destination'
      />
      <Destination name={name} />
      <DestinationDetails name={name} />
    </>
  );
};

RightPanel.displayName = 'RightPanel';
export default React.memo(RightPanel);
