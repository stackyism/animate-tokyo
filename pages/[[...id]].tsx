import styles from "../styles/Songs.module.css";
import { MdClose, MdModeComment } from "react-icons/md";
import Link from "next/link";
import { motion, Variants, Variant } from "framer-motion";
import { useRouter } from "next/router";
import { BiExpandAlt } from "react-icons/bi";

const imageDuration = 0.4;
const imageCubicBezier = [0.29, 1.7, 0.7, 0.8];
const textDuration = 0.4;

const image1: Variants = {
  initial: {
    height: "300px",
    width: "300px",
    top: "100px",
  },
  animate: {
    height: "720px",
    width: "400px",
    top: 0,
    transition: {
      duration: imageDuration,
      ease: imageCubicBezier,
    },
  },
};

const image2: Variants = {
  initial: {
    height: "720px",
    width: "400px",
    top: 0,
  },
  animate: {
    height: "300px",
    width: "300px",
    top: "100px",
    transition: {
      duration: imageDuration,
      ease: imageCubicBezier,
    },
  },
};

const description1: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: textDuration,
    },
  },
};

const description2: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: textDuration,
    },
  },
};

const Single = () => {
  const { query } = useRouter();
  const songId = query?.id?.[0];

  return (
    <motion.div initial="initial" animate="animate" key={songId ?? "hello"}>
      <div className={styles.outerContainer}>
        <div
          className={`${styles.songsContainer} ${styles.r1} ${styles.relative}`}
        >
          <motion.img
            variants={songId ? image1 : image2}
            className={`${styles.songsImageContainer} ${styles.absolute}`}
            src="/tokyo.jpg"
            alt="lost in tokyo"
          />
          <motion.div
            className={`${styles.songsDetailContainer}`}
            variants={songId ? description1 : description2}
          >
            <div className={styles.flexCenter}>
              <span>
                <b>Shared</b> by you
              </span>
            </div>
            <div className={styles.flexColCenter}>
              <div className={styles.flexColCenter}>
                <h1 className={styles.songsTitle}>Lost in Tokyo</h1>
                <p className={styles.songsSubtitle}>
                  Cras mattis consectetur purus sit amet fermentum. Maecenas sed
                  diam eget risus varius blandit sit amet non magna.
                </p>
              </div>
              <Link href={"/songs/123"}>
                <a className={styles.iconContainer}>
                  <BiExpandAlt fill="white" />
                </a>
              </Link>
            </div>
          </motion.div>
          {songId ? (
            <>
              <motion.div className={`${styles.songDetail} ${styles.absolute}`}>
                <div className={`${styles.flexCol}`}>
                  <motion.h1
                    className={styles.songDetailTitle}
                    initial={{ opacity: 0, y: 150 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1,
                      duration: textDuration,
                      ease: [0.41, 1.61, 0.69, 0.88],
                    }}
                  >
                    Lost in Tokyo
                  </motion.h1>
                  <div
                    className={`${styles.flexBetween} ${styles.songInfoContainer}`}
                  >
                    <motion.h6
                      className={styles.songDetailSubtitle}
                      initial={{ opacity: 0, y: 60 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: textDuration,
                        ease: "easeInOut",
                      }}
                    >
                      By Jonathan Vik
                    </motion.h6>
                    <motion.h6
                      className={`${styles.songComment}`}
                      initial={{
                        opacity: 0,
                        x: 60,
                      }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: textDuration,
                        ease: "easeInOut",
                      }}
                    >
                      8 <MdModeComment fill="white" size="1rem" />
                    </motion.h6>
                  </div>
                </div>
              </motion.div>
            </>
          ) : null}
          {songId ? (
            <div className={styles.closeIcon}>
              <Link href="/songs">
                <a className={styles.iconContainer}>
                  <MdClose fill="white" size="1.2rem" />
                </a>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

export default Single;
