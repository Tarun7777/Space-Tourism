import React from 'react';
import { content } from '../../../../constants';
import './button.css'

const Button = () => {
  return (
    <div className='home--right-panel'>
      <button className='explore-btn'>{content?.home?.common?.buttonName.toUpperCase?.()}</button>
    </div>
  );
};

Button.displayName = 'Button';
export default Button;
