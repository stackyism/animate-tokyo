import styles from "../../styles/Songs.module.css";
import Image from "next/image";
import { BiExpandAlt } from "react-icons/bi";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  exit: {
    opacity: 0,
    y: 50,
  },
};

const Songs = () => {
  return (
    <motion.div initial="initial" animate="animate">
      <div className={styles.container}>
        <div className={`${styles.songsContainer} ${styles.p2} ${styles.r1}`}>
          <div>
            <b>Shared</b> by you
          </div>
          <motion.img
            variants={fadeInUp}
            className={styles.songsImageContainer}
            src="/tokyo.jpg"
            alt="lost in tokyo"
            height="300"
            width="300"
          />
          <div className={styles.songsDescription}>
            <h1 className={styles.songsTitle}>Lost in Tokyo</h1>
            <p className={styles.songsSubtitle}>
              Cras mattis consectetur purus sit amet fermentum. Maecenas sed
              diam eget risus varius blandit sit amet non magna.
            </p>
          </div>
          <div>
            <Link href={"/songs/hello"}>
              <a className={styles.iconContainer}>
                <BiExpandAlt fill="white" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Songs;
