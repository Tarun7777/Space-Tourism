import React from 'react';
import DestinationNavbar from '../destination-navbar/DestinationNavbar';
import Destination from '../../atoms/destination/Destination';
import DestinationDetails from '../../atoms/destination-detail/DestinationDetails';

const RightPanel = () => {
  return (
    <>
      <DestinationNavbar />
      <Destination />
      <DestinationDetails />
    </>
  );
};

RightPanel.displayName = 'RightPanel';
export default React.memo(RightPanel);
