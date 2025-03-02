import { motion } from "framer-motion";

const TextFade = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 20
      }}
      animate={{
        opacity: 1,
        translateY: 0
      }}
      transition={{ duration: 1 }}
      className="text-5xl font-bold text-center mt-20"
    >
      {children}
    </motion.div>
  );
};

export default TextFade;
