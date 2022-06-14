import styles from "../../styles/Songs.module.css";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeInUp = {};

const Single = () => {
  return (
    <motion.div initial="initial" animate="animate">
      <div className={styles.container}>
        <div
          className={`${styles.songsContainer} ${styles.r1} ${styles.relative}`}
        >
          <motion.img
            variants={fadeInUp}
            className={`${styles.imageContainer} ${styles.r1}`}
            src="/tokyo.jpg"
            alt="lost in tokyo"
            height="100%"
            width="100%"
          />
          <div className={`${styles.songDetail} ${styles.absolute}`}>
            <h1 className={styles.songDetailTitle}>Lost in Tokyo</h1>
            <h6 className={styles.songDetailSubtitle}>By Jonathan Vik</h6>
          </div>
          <div className={styles.closeIcon}>
            <Link href="/songs">
              <a className={styles.iconContainer}>
                <MdClose fill="white" size="1.2rem" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Single;
