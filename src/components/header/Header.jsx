import styles from './Header.module.css';
import Navigation from '../navigation/Navigation';
import MobileNav from '../mobile-navigation/MobileNav';

function Header() {
  return (
    <header role="banner" className={styles.header}>
      <img src="./assets/images/logo.svg" alt="shortly logo" />
      <Navigation />
      <MobileNav />
    </header>
  );
}

export default Header;
