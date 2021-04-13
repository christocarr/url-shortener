import styles from './Card.module.css';

function Card({ iconPath, children }) {
  return (
    <div className={styles.card}>
      <div
        className={styles.icon_container}
        style={{
          backgroundImage: `url(${iconPath})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '50%',
        }}
      ></div>
      {children}
    </div>
  );
}

export default Card;
