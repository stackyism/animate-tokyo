import { useEffect, useState, FC, PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { type Song } from "./api/song";

import { SongImage } from "../components/SongImage";
import { SongDescription } from "../components/SongDescription";
import { SongDetail } from "../components/SongDetail";
import { SongCloseIcon } from "../components/SongCloseIcon";

import styles from "../styles/Songs.module.css";

const Songs: FC<PropsWithChildren<{ song: Song }>> = ({ song }) => {
  const { query } = useRouter();
  const songId = query?.songId?.[0];

  return (
    <motion.div initial="initial" animate="animate" key={songId ?? "songs"}>
      <div className={styles.outerContainer}>
        <div
          className={`${styles.songsContainer} ${styles.r1} ${styles.relative}`}
        >
          <SongImage song={song} songId={songId} />
          <SongDescription song={song} songId={songId} />
          <SongDetail song={song} songId={songId} />
          <SongCloseIcon songId={songId} />
        </div>
      </div>
    </motion.div>
  );
};

export default () => {
  const [song, setSong] = useState();

  useEffect(() => {
    fetch("/api/song")
      .then((res) => res.json())
      .then((responseSong) => setSong(responseSong));
  }, []);

  if (!song) {
    return null;
  }

  return <Songs song={song} />;
};
