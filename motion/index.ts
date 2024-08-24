export const navVariants = {
   initial: {
      y: "-100%", transition: { ease: "easeInOut", duration: 1 }
   },
   enter: { y: 0, transition: { ease: "easeInOut", duration: 1 } },
   hidden: { y: "-100%", transition: { ease: "easeInOut", duration: 0.5 } },
   vissible: { y: 0, transition: { ease: "easeInOut", duration: 0.5 }, }
};

export const textAnimation = {
   initial: {
      opacity: 0, y: "100%", transition: {
         duration: 0.8,
         delay: 0.5,
         ease: [0.33, 1, 0.68, 1],
      },
   },
   enter: {
      opacity: 1, y: 0,
      transition: {
         duration: 0.8,
         delay: 0.5,
         ease: [0.33, 1, 0.68, 1],
      },
   },
};

export const imageAnimation = {
   initial: {
      opacity: 0, scale: 0, transition: {
         duration: 0.8,
         ease: [0.33, 1, 0.68, 1],
      },
   },
   enter: {
      opacity: 1, scale: 1,
      transition: {
         duration: 0.8,
         ease: [0.33, 1, 0.68, 1],
      },
   },
};

export const animation = {
   initial: { y: "100%" },
   enter: (i: number) => ({
      y: "0",
      transition: {
         duration: 0.75,
         ease: [0.33, 1, 0.68, 1],
         delay: 0.5,
      },
   }),
};

export const scaleAnimation = {
   initial: { scale: 0, x: "-50%", y: "-50%" },
   enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
   },
   closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
   },
};

export const opacity = {
   initial: {
      opacity: 0
   },
   enter: {
      opacity: 0.75,
      transition: { duration: 1, delay: 0.2 }
   },
};

export const slideUp = {
   initial: {
      top: 0
   },
   exit: {
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
   }
};

// menu
export const menuSlide = {
   initial: { x: "calc(100% + 100px)" },
   enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
   exit: {
      x: "calc(100% + 100px)",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
   },
};
// SLIDE
export const slide = {
   initial: { x: 80 },
   enter: (i: number) => ({
      x: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
   }),
   exit: (i: number) => ({
      x: 80,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
   }),
};

// SCALE
export const scale = {
   open: { scale: 1, transition: { duration: 0.3 } },
   closed: { scale: 0, transition: { duration: 0.4 } },
};

// CURVE
let initialPath = "";
let targetPath = "";

if (typeof window !== "undefined") {
   initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
      } Q-100 ${window.innerHeight / 2} 100 0`;
   targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight
      } Q100 ${window.innerHeight / 2} 100 0`;
}

export const curve = {
   initial: {
      d: initialPath,
   },
   enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
   },
   exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
   },
};
