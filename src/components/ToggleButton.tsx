import React from 'react';
import './ToggleButton.css';

interface ToggleButtons {
  children: React.ReactNode;
  onClick?: () => void;
}

const ToggleButtons = ({ children, onClick }: ToggleButtons) => {
  return (
    <button id="themeButton" onClick={onClick}>
      {children}
    </button>
  );
};

export default ToggleButtons;