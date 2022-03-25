import React from 'react';
import { content } from '../../../../constants';
import './button.css';

const Button = () => {
  return (
    <button className='explore-btn'>
      {content?.home?.common?.buttonName}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
