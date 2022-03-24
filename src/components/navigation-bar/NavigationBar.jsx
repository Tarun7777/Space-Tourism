import React from 'react';
import { NavLink } from 'react-router-dom';
import { useWindowDimensions } from '../../hooks/use-window-dimensions/useWindowDimensions';
import Logo from '../../assets/shared/logo.ico';
import Hamburger from '../../assets/shared/icon-hamburger.ico';
import Close from '../../assets/shared/icon-close.ico';
import { content } from '../../constants/content';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '../../constants/dimensions';
import './NavigationBar.css';

const NavigationBar = ({ isMain = false }) => {
  const { width } = useWindowDimensions();
  const [isNavBarOpen, toggleNavBar] = React.useState(false);
  const shouldDisplayPrefix =
    width <= MOBILE_MAX_WIDTH || width > TABLET_MAX_WIDTH;
  const shouldDisplayNavToggler = width <= MOBILE_MAX_WIDTH;

  const clickHandler = () => {
    toggleNavBar((prevValue) => !prevValue);
  };

  return (
    <div className='header flex'>
      {isMain && <img className='logo' src={Logo} alt='Logo' />}
      {isMain && shouldDisplayNavToggler && (
        <img
          className='nav-toggler'
          onClick={clickHandler}
          src={isNavBarOpen ? Close : Hamburger}
          alt='Navigation bar toggler'
        />
      )}
      {(!shouldDisplayNavToggler || isNavBarOpen) && (
        <nav className='nav-bar'>
          <ul className='nav-items flex'>
            {content?.main?.navItems.map((item, index) => (
              <li key={index} className='nav-item align-center'>
                <NavLink
                  className={(navData) => (navData.isActive ? 'active' : '')}
                  to={`/${
                    item?.value !== 'Home' ? item?.value.toLowerCase() : ''
                  }`}
                >
                  {shouldDisplayPrefix && <span>{item?.prefix}</span>}
                  {item?.value.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

NavigationBar.displayName = 'NavigationBar';
export default React.memo(NavigationBar);
