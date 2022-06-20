import { FC } from "react";
import { motion } from "framer-motion";

import { expandImage, collapseImage } from "../animation/songsAnimation";
import { SongSubProps } from "./types";

import styles from "../styles/Songs.module.css";

export const SongImage: FC<SongSubProps> = ({ song, songId }) => {
  return (
    <motion.img
      variants={songId ? expandImage : collapseImage}
      className={`${styles.songsImageContainer} ${styles.absolute}`}
      src={song.coverImageSrc}
      alt={song.name}
    />
  );
};
