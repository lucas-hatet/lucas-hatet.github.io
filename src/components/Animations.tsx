import { motion } from "framer-motion";
import styled from 'styled-components';
import React from 'react';

interface HollowtextIntroProps {
  children: React.ReactNode;
}

const HollowtextIntro = ({ children }: HollowtextIntroProps) => {
  const BoxStyled = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
  const childrenArray = React.Children.toArray(children);
  return (
    { childrenArray.map((child, index) => (
      <div style={{ position: "relative", overflow: "hidden" }}>
        <BoxStyled
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.8 * index
          }}>
          { child }
        </BoxStyled>
      </div>
    }
  );
};

export { HollowtextIntro };
