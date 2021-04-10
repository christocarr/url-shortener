import styles from './SignupButton.module.css';
function SignupButton({ children, buttonWidth }) {
  return (
    <button className={styles.button_cta} style={{ width: buttonWidth }}>
      {children}
    </button>
  );
}

export default SignupButton;
