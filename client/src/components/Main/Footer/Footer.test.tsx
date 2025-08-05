import { footerTest as styles } from '@styles';

const FooterTest = () => {
  return (
    <section className={styles.gradientFooter}>
      <div className={styles.backgroundDecorations}></div>

      <div className={styles.container}>
        <div className={styles.glassCard}>
          <div className={styles.topHeart}>
            <div className={styles.heartContainer}></div>
          </div>

          <div className={styles.joinBadge}>Join Our Adventure</div>

          <h2 className={styles.mainTitle}>Ready to Launch Your</h2>
        </div>
      </div>
    </section>
  );
};

export default FooterTest;
