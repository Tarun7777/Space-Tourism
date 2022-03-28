import React from 'react';
import LogoImg from '../../../../assets/shared/logo.ico';
import './Logo.scoped.scss';

const Logo = () => {
  return <img className='logo' src={LogoImg} alt='Logo' />;
};

Logo.displayName = 'Logo';
export default React.memo(Logo);
