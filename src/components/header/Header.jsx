import React from 'react';
import styles from './Header.module.css';
import Navigation from '../navigation/Navigation';
import MobileNav from '../mobile-navigation/MobileNav';

function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleMobileNav = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <header role="banner" className={styles.header}>
      <img src="./assets/images/logo.svg" alt="shortly logo" />
      <button
        className={styles.menu_button}
        style={{
          backgroundImage: `url('./assets/images/menu.svg')`,
          width: '1.5em',
          height: '1.5em',
        }}
        onClick={toggleMobileNav}
        aria-label="menu"
      ></button>
      <Navigation />
      {open && <MobileNav />}
    </header>
  );
}

export default Header;
