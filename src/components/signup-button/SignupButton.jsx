import styles from './SignupButton.module.css';
function SignupButton({ children, buttonWidth, padding }) {
  return (
    <button
      className={styles.button_cta}
      style={{ width: buttonWidth, padding: padding }}
    >
      {children}
    </button>
  );
}

export default SignupButton;
