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
}

const featuresContent = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
  },
}

// section 3

const radio = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
  }}

export {headPara, headText, typeWriter, featuresHead, featuresContent, radio}