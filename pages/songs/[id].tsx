import styles from "../../styles/Songs.module.css";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const Single = () => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.songsContainer} ${styles.r1} ${styles.relative}`}
      >
        <Image
          className={styles.r1}
          src="/tokyo.jpg"
          alt="lost in tokyo"
          height="720"
          width="400"
          objectFit="cover"
        />
        <div className={styles.closeIcon}>
          <Link href="/songs">
            <a className={styles.iconContainer}>
              <MdClose fill="white" size="1.5rem" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Single;
