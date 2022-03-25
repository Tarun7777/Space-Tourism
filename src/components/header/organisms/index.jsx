import React from 'react';
import Logo from '../atoms/logo/Logo';
import Navbar from '../molecules/navbar/Navbar';
import { useWindowDimensions } from '../../../hooks/use-window-dimensions/useWindowDimensions';
import { MOBILE_MAX_WIDTH, TABLET_MAX_WIDTH } from '../../../constants';
import './index.css';

const Header = ({ isMain = false }) => {
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
      {isMain && <Logo />}
      <Navbar
        isMain={isMain}
        isNavBarOpen={isNavBarOpen}
        clickHandler={clickHandler}
        shouldDisplayPrefix={shouldDisplayPrefix}
        shouldDisplayNavToggler={shouldDisplayNavToggler}
      />
    </div>
  );
};

Header.displayName = 'Header';
export default React.memo(Header);
