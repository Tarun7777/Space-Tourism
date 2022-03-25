import React from 'react';
import NavbarToggler from '../../atoms/navbar-toggler/NavbarToggler';
import NavItem from '../../atoms/nav-item/NavItem';
import './Navbar.css';

const Navbar = ({
  isMain,
  isNavBarOpen,
  clickHandler,
  shouldDisplayNavToggler,
  shouldDisplayPrefix,
  navItems,
  path
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
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                isMain={isMain}
                index={index}
                prefix={item?.prefix}
                value={item?.value}
                shouldDisplayPrefix={shouldDisplayPrefix}
                path={path}
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
