import { Link } from "react-router-dom";

import './Button.css';

interface Button {
  children: React.ReactNode;
  to: string;
  btnclass?: string;
}
const Button = ({ children, to, btnclass }: Button) => {
  return (
      <Link to={ to }>
          <button class={btnclass + " btn"}>
              { children }
          </button>
      </Link>
  );
};

export default Button;
