import React from 'react';
import Logo from '../atoms/logo/Logo';
import Navbar from '../molecules/navbar/Navbar';
import './index.scoped.scss';

const Header = () => {
  return (
    <div className={`app--header flex`}>
      <Logo />
      <Navbar />
    </div>
  );
};

Header.displayName = 'Header';
export default React.memo(Header);
