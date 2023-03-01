import { motion } from "framer-motion";
import { useEffect } from "react";

const MotionDiv = ({ children, className }) => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      className={'px-8 '+className}
      children={children}
    />
  );
};

export default MotionDiv;
