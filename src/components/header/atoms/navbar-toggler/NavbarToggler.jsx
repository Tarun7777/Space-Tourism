import React from 'react';
import Close from '../../../../assets/shared/icon-close.ico';
import Hamburger from '../../../../assets/shared/icon-hamburger.ico';
import './NavbarToggler.scoped.scss';

const NavToggler = ({ isNavBarOpen, clickHandler }) => {
  return (
    <img
      className={`nav-toggler ${isNavBarOpen ? 'nav-toggler--close' : ''}`}
      onClick={clickHandler}
      src={isNavBarOpen ? Close : Hamburger}
      alt='Navigation bar toggler'
    />
  );
};

NavToggler.displayName = 'NavbarToggler';
export default React.memo(NavToggler);
