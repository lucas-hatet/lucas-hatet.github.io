import { Link } from "react-router-dom";

import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  to: string;
  btnclass?: string;
}
const Button = ({ children, to, btnclass }: ButtonProps) => {
  return (
      <Link to={ to }>
          <button className={btnclass + " btn"}>
              { children }
          </button>
      </Link>
  );
};

export default Button;
