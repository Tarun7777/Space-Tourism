import React from 'react';
import { content } from '../../../../constants';
import './LeftPanel.css';

const WelcomeText = () => {
  return (
    <>
      <h1 className='heading'>{content?.home?.common?.heading}</h1>
      <p>{content?.home?.common?.subHeading}</p>
    </>
  );
};

WelcomeText.displayName = 'WelcomeText';
export default React.memo(WelcomeText);