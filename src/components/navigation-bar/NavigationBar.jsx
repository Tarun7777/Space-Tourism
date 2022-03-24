import React from 'react';
import { content } from '../../constants/content';
import './NavigationBar.css';

const NavigationBar = ({ isMain = false }) => {
  return (
    <div className='header flex'>
      {isMain && (
        <img className='logo' src='../../assets/shared/logo.ico' alt='Logo' />
      )}
      <nav className='nav-bar'>
        <ul className='nav-items flex'>
          {content?.main?.navItems.map((item, index) => (
            <li key={index} className='nav-item'>
              <span>{item?.prefix}</span>
              {item?.value}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(NavigationBar);
