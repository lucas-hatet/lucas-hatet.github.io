import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Accueil</Link>
      <Link to="/about">À propos</Link>
    </nav>
  );
};

export default Navbar;
