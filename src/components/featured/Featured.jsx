import Image from 'next/image';
import styles from './featured.module.css';

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Arfin Hasib Here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.imgContainer} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
            magnam.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
            commodi veniam doloribus magnam quibusdam reiciendis sit ad, rem
            voluptatem odit quaerat dolorum! Perspiciatis, quisquam voluptatem!
            Porro voluptas voluptatem molestiae dignissimos!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
