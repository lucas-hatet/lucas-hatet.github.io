import '../style/Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <Link to="/presentation">Présentation</Link>
      <Link to="/parcours">Parcours</Link>
      <Link to="/competences">Compétences</Link>
      <Link id="btn-home" to="/">LH</Link>
      <Link to="/projets">Projets</Link>
      <Link to="/interets"><div>Intérêts</div></Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};

export default Navbar;
