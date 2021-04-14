import styles from './Spinner.module.css';

function Spinner() {
  return (
    <div
      data-testid="loading-component"
      className={styles.loading_button_div}
    ></div>
  );
}

export default Spinner;
