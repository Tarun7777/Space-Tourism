import React from 'react';
import { content } from '../../../../constants';
import NavItem from '../../atoms/nav-item/NavItem';
import NavbarToggler from '../../atoms/navbar-toggler/NavbarToggler';
import './Navbar.css';

const Navbar = ({
  isMain,
  isNavBarOpen,
  clickHandler,
  shouldDisplayNavToggler,
  shouldDisplayPrefix,
}) => {
  return (
    <>
      {isMain && shouldDisplayNavToggler && (
        <NavbarToggler
          isNavBarOpen={isNavBarOpen}
          clickHandler={clickHandler}
        />
      )}
      {(!isMain || !shouldDisplayNavToggler || isNavBarOpen) && (
        <nav className={`${isMain ? 'apply-background bar ' : ''} nav-bar`}>
          <ul className='nav-items flex'>
            {content?.main?.navItems.map((item, index) => (
              <NavItem
                key={index}
                isMain={isMain}
                index={index}
                prefix={item?.prefix}
                value={item?.value}
                shouldDisplayPrefix={shouldDisplayPrefix}
              />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

Navbar.displayName = 'Navbar';
export default React.memo(Navbar);
