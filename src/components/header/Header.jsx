import styles from './Header.module.css';
import Navigation from '../navigation/Navigation';

function Header() {
  return (
    <header role="banner" className={styles.header}>
      <img src="./assets/images/logo.svg" alt="shortly logo" />
      <Navigation />
    </header>
  );
}

export default Header;
