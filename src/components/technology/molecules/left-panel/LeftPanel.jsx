import React from 'react';
import TechnologyDetails from '../../atoms/technology-details/TechnologyDetails';
import TechnologyNavbar from '../technology-navbar/TechnologyNavbar';

const LeftPanel = () => {
  return (
    <>
      <TechnologyNavbar />
      <TechnologyDetails />
    </>
  );
};

LeftPanel.displayName = 'LeftPanel';
export default React.memo(LeftPanel);
