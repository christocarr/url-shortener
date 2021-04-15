import styles from './Navigation.module.css';
import SignupButton from '../signup-button/SignupButton';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.nav__items_container}>
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Resources</a>
        </li>
      </ul>
      <ul className={styles.account__items_container}>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <SignupButton buttonWidth="120px" padding="0.5em">
            Sign Up
          </SignupButton>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
