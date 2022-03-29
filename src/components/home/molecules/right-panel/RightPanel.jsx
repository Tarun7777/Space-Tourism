import React from 'react';
import { useNavigate } from 'react-router-dom';
import { content, path, DESTINATION } from '../../../../constants';
import './RightPanel.scoped.scss';

const Button = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/${path}/${DESTINATION}`);
  };

  return (
    <button onClick={clickHandler} className='explore-btn'>
      {content?.home?.common?.buttonName}
    </button>
  );
};

Button.displayName = 'Button';
export default Button;
