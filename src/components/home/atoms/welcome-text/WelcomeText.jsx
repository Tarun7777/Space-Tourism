import React from 'react';
import { content } from '../../../../constants/content';
import  './WelcomeText.css'

const WelcomeText = () => {
  return (
    <div className='home--left-panel'>
      <h5>{content?.main?.superHeadings?.home?.value.toUpperCase?.()}</h5>
      <h1>{content?.home?.common?.heading.toUpperCase?.()}</h1>
      <p>{content?.home?.common?.subHeading}</p>
    </div>
  );
};

WelcomeText.displayName = 'WelcomeText';
export default React.memo(WelcomeText);
