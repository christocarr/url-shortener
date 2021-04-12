import styles from './Hero.module.css';
import SignupButton from '../signup-button/SignupButton';

function Hero() {
  return (
    <section className={styles.hero_container}>
      <div
        className={styles.svg_container}
        style={{
          backgroundImage: `url('./assets/images/illustration-working.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'calc(100% + 150px)',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className={styles.hero_text_container}>
        <h1 className={styles.hero_heading}>More than just shorter links</h1>
        <p className={styles.hero_body}>
          Build your brand's recognition and get insights on how your links are
          performing.
        </p>
        <SignupButton>Get Started</SignupButton>
      </div>
    </section>
  );
}

export default Hero;
