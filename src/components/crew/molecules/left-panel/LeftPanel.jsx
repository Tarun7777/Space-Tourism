import React from 'react';
import CrewDetails from '../../atoms/crew-details/CrewDetails';
import CrewNavbar from '../crew-navbar/CrewNavbar';

const LeftPanel = ({ name }) => {
  return (
    <>
      <CrewDetails />
      <CrewNavbar />
    </>
  );
};

LeftPanel.displayName = 'LeftPanel';
export default React.memo(LeftPanel);
