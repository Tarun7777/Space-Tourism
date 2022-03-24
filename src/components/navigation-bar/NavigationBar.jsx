import React from 'react';
import Logo from '../../assets/shared/logo.ico';
import { content } from '../../constants/content';
import './NavigationBar.css';

const NavigationBar = ({ isMain = false }) => {
  return (
    <div className='header flex'>
      {isMain && <img className='logo' src={Logo} alt='Logo' />}
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
