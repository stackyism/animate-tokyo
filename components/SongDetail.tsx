import { FC } from "react";
import { motion } from "framer-motion";
import { MdModeComment } from "react-icons/md";

import {
  songTitleFadeUp,
  songSubtitleFadeUp,
  songCommentFadeLeft,
} from "../animation/songsAnimation";
import { SongSubProps } from "./types";

import styles from "../styles/Songs.module.css";

export const SongDetail: FC<SongSubProps> = ({ song, songId }) => {
  return songId ? (
    <motion.div className={`${styles.songDetail} ${styles.absolute}`}>
      <div className={`${styles.flexCol}`}>
        <motion.h1
          className={styles.songDetailTitle}
          variants={songTitleFadeUp}
        >
          {song.name}
        </motion.h1>
        <div className={`${styles.flexBetween} ${styles.songInfoContainer}`}>
          <motion.h6
            className={styles.songDetailSubtitle}
            variants={songSubtitleFadeUp}
          >
            By {song.artist}
          </motion.h6>
          <motion.h6
            className={`${styles.songComment} ${styles.flexCenter}`}
            variants={songCommentFadeLeft}
          >
            {song.comments.length} <MdModeComment fill="white" size="1rem" />
          </motion.h6>
        </div>
      </div>
    </motion.div>
  ) : null;
};
