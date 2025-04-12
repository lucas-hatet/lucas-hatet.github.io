import { Link } from "react-router-dom";

import './Button.css';

interface Button {
  children: React.ReactNode;
  to: string;
}
const Button = ({ children, to }: Button) => {
  return (
    <div class="button">
        <Link to={ to }>
            <button id="btn">
                { children }
            </button>
        </Link>
    </div>
  );
};

export default Button;
