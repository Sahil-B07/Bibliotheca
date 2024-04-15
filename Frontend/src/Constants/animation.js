//  section 1
const headText = {
  hidden: { opacity: 0, y: 30, rotateX: 90 },
  visible: { opacity: 1, y: 0, rotateX: 0 },
};

const headPara = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
};

// section 2
const typeWriter = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: 1, type: "spring", stiffness: 250 },
  },
};

const featuresHead = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const featuresContent = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

// section 3

const radio = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const bounceTransition = {
  hidden: { opacity: 1, y: 630, x: 1300, transition: { duration: 1, type: "spring", bounce: 0.5}},
  visible: {
    y: 630,
    x: 640,
    opacity: 1,
    zIndex:1,
    transition: { duration: 1, type: "spring", bounce: 0.25},
  },
};

const specsOn ={
  hidden:{opacity:0, x:10},
  visible:{opacity:1, x:0, transition: { duration: 1.5, type:'spring', bounce:0.5}},
}
const specsOff ={
  hidden:{opacity:0, x:-10},
  visible:{opacity:1, x:0, transition: { duration: 1, type:'spring', bounce:0.25}},
}
const popUpBg ={
  hidden:{opacity:0},
  visible:{opacity:1, transition: { duration: 1 }},
}


export {
  radio,
  popUpBg,
  specsOn,
  specsOff,
  headPara,
  headText,
  typeWriter,
  featuresHead,
  featuresContent,
  bounceTransition,
};
