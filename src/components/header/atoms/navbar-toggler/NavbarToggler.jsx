import React from 'react';
import Close from '../../../../assets/shared/icon-close.ico';
import Hamburger from '../../../../assets/shared/icon-hamburger.ico';
import './NavbarToggler.css';

const NavToggler = ({ isNavBarOpen, clickHandler }) => {
  return (
    <>
      <img
        className='nav-toggler'
        onClick={clickHandler}
        src={isNavBarOpen ? Close : Hamburger}
        alt='Navigation bar toggler'
      />
    </>
  );
};

NavToggler.displayName = 'NavbarToggler';
export default React.memo(NavToggler);
