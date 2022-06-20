import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiExpandAlt } from "react-icons/bi";

import {
  descriptionFadeIn,
  descriptionFadeOut,
  expandIconFadeIn,
  expandIconFadeOut,
} from "../animation/songsAnimation";
import { SongSubProps } from "./types";

import styles from "../styles/Songs.module.css";

export const SongDescription: FC<SongSubProps> = ({ song, songId }) => {
  return (
    <motion.div
      className={`${styles.songsDetailContainer}`}
      variants={songId ? descriptionFadeOut : descriptionFadeIn}
    >
      <div className={styles.flexCenter}>
        <span>
          <b>Shared</b> by {song.sharedBy}
        </span>
      </div>
      <div className={styles.flexColCenter}>
        <div className={styles.flexColCenter}>
          <h1 className={styles.songsTitle}>{song.name}</h1>
          <p className={styles.songsSubtitle}>{song.description}</p>
        </div>
        <Link href={"/123"}>
          <motion.a
            className={styles.iconContainer}
            variants={songId ? expandIconFadeOut : expandIconFadeIn}
          >
            <BiExpandAlt fill="white" size="1.4rem" />
          </motion.a>
        </Link>
      </div>
    </motion.div>
  );
};
