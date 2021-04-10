import styles from './MobileNav.module.css';
import SignupButton from '../signup-button/SignupButton';

function MobileNav() {
  return (
    <>
      <nav className={styles.mobile_nav}>
        <ul role="menu" className={styles.mobile__nav_list}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <SignupButton buttonWidth="100%">Sign Up</SignupButton>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MobileNav;
