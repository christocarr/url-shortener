import styles from './Header.module.css';

function Header() {
  return (
    <header role="banner" className={styles.header}>
      <img src="./assets/images/logo.svg" alt="shortly logo" />
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Resources</a>
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
