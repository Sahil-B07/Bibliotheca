import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { ImSpinner8 } from "react-icons/im";

const Circle = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <ImSpinner8 className="fill-red-500 motion-safe:animate-spin" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Circle;
