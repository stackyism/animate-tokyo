import { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdClose } from "react-icons/md";

import { SongSubProps } from "./types";

import styles from "../styles/Songs.module.css";
import {
  expandIconFadeOut,
  expandIconFadeIn,
} from "../animation/songsAnimation";

export const SongCloseIcon: FC<Pick<SongSubProps, "songId">> = ({ songId }) => {
  return songId ? (
    <div className={styles.closeIcon}>
      <Link href="/">
        <motion.a
          className={styles.iconContainer}
          variants={songId ? expandIconFadeIn : expandIconFadeOut}
        >
          <MdClose fill="white" size="1.2rem" />
        </motion.a>
      </Link>
    </div>
  ) : null;
};
