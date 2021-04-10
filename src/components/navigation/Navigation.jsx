import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
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
          <button>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
