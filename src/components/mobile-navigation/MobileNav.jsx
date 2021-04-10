import styles from './MobileNav.module.css';

function MobileNav() {
  return (
    <nav>
      <ul role="menu">
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

export default MobileNav;
