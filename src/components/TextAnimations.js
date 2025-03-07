import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const TextFade = ({ children }) => {
    return (_jsx(motion.div, { initial: {
            opacity: 0,
            translateY: 20
        }, animate: {
            opacity: 1,
            translateY: 0
        }, transition: { duration: 1 }, className: "text-5xl font-bold text-center mt-20", children: children }));
};
export default TextFade;
