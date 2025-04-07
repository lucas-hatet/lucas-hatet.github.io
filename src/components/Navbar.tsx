import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <Link to="/presentation"><p>Présentation</p></Link>
      <Link to="/parcours"><p>Parcours</p></Link>
      <Link to="/projets"><p>Projets</p></Link>
      <Link id="btn-home" to="/"><p>LH</p></Link>
      <Link to="/competences"><p>Compétences</p></Link>
      <Link to="/interets"><p>Intérêts</p></Link>
      <Link to="/contacts"><p>Contacts</p></Link>
    </nav>
  );
};

export default Navbar;
