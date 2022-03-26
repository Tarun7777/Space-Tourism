import React from 'react';
import NavbarToggler from '../../atoms/navbar-toggler/NavbarToggler';
import NavItems from '../../atoms/nav-items/NavItems';
import { useWindowDimensions } from '../../../../hooks/use-window-dimensions/useWindowDimensions';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '../../../../constants';
import './Navbar.css';

const Navbar = () => {
  const { width } = useWindowDimensions();
  const shouldDisplayPrefix =
    width <= MOBILE_MAX_WIDTH || width > TABLET_MAX_WIDTH;
  const shouldDisplayNavToggler = width <= MOBILE_MAX_WIDTH;

  const [isNavBarOpen, toggleNavBar] = React.useState(false);

  const clickHandler = () => {
    toggleNavBar((prevValue) => !prevValue);
  };

  return (
    <>
      {shouldDisplayNavToggler && (
        <NavbarToggler
          isNavBarOpen={isNavBarOpen}
          clickHandler={clickHandler}
        />
      )}
      {(!shouldDisplayNavToggler || isNavBarOpen) && (
        <nav className='app--navbar'>
          <NavItems shouldDisplayPrefix={shouldDisplayPrefix} />
        </nav>
      )}
    </>
  );
};

Navbar.displayName = 'Navbar';
export default React.memo(Navbar);
