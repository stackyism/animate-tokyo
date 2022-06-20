import { Variants } from "framer-motion";

const imageDuration = 0.4;
const imageCubicBezier = [0.29, 1.7, 0.7, 0.8];
const textDuration = 0.4;

export const expandImage: Variants = {
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

export const collapseImage: Variants = {
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

export const descriptionFadeOut: Variants = {
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

export const descriptionFadeIn: Variants = {
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

export const songTitleFadeUp: Variants = {
  initial: { opacity: 0, y: 150 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: textDuration,
      ease: [0.41, 1.61, 0.69, 0.88],
    },
  },
};

export const songSubtitleFadeUp: Variants = {
  initial: { opacity: 0, y: 60 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: textDuration,
      ease: "easeInOut",
    },
  },
};

export const songCommentFadeLeft: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: textDuration,
      ease: "easeInOut",
    },
  },
};

export const expandIconFadeIn: Variants = {
  initial: {
    height: "16px",
    width: "16px",
  },
  animate: {
    height: "56px",
    width: "56px",
    transition: {
      ease: "easeOut",
    },
  },
};

export const expandIconFadeOut: Variants = {
  initial: {
    height: "56px",
    width: "56px",
  },
  animate: {
    height: "16px",
    width: "16px",
    transition: {
      ease: "easeIn",
    },
  },
};
