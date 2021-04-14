import styles from './MobileNav.module.css';
import SignupButton from '../signup-button/SignupButton';

function MobileNav() {
  return (
    <>
      <nav className={styles.mobile_nav}>
        <ul role="menu" className={styles.mobile__nav_list}>
          <div className={styles.nav__items_container}>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </div>
          <div className={styles.account__items_container}>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <SignupButton buttonWidth="100%">Sign Up</SignupButton>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default MobileNav;
