import { motion } from "framer-motion";
import styled from 'styled-components';
import React from 'react';

interface MultipleTextIntroProps {
  children: React.ReactNode;
}
const MultipleTextIntro = ({ children }: MultipleTextIntroProps) => {
  const BoxStyled = styled(motion.div)`
    width: 100%;
  `;
  const childrenArray = React.Children.toArray(children);
  return (
    childrenArray.map((child, index) => (
      <div key={`text-intro-${index}`} style={
        { 
          position: "relative",
          overflow: "hidden",
          height: "min",
          }
      }>
        <BoxStyled
          initial={{ y: -720 }}
          animate={{ y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: index * 1,
          }}>
          { child }
        </BoxStyled>
      </div>
  ))
)};

export { MultipleTextIntro };
