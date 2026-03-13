import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img src="/img/banner.jpg" alt="banner" className={styles.bannerImg} />
      <div className={styles.textBox}>
        <h1>where every event finds its venue</h1>
        <p>
          Finding the perfect venue has never been easier. Whether it&apos;s a
          wedding, corporate event, or private party, we connect people to the
          perfect place.
        </p>
      </div>
    </div>
  );
}