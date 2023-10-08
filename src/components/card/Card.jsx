import Image from 'next/image';
import styles from './card.module.css';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href='/'>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            possimus.
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab accusamus
          sapiente, obcaecati magnam voluptatum minima assumenda dolore quis,
          velit nulla ipsum perspiciatis eos tempore non asperiores, officiis
          saepe sint! Optio?
        </p>
        <Link href='/' className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
