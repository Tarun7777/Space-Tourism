import React from 'react';
import { useNavigate } from 'react-router-dom';
import { content, DESTINATION } from '../../../../constants';
import './RightPanel.css';

const Button = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/${DESTINATION}`);
  };

  return (
    <button onClick={clickHandler} className='explore-btn'>
      {content?.home?.common?.buttonName}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
