import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
  return (
    <nav class="navbar">
      <Link to="/presentation"><h4>Présentation</h4></Link>
      <Link to="/parcours"><h4>Parcours</h4></Link>
      <Link to="/projets"><h4>Projets</h4></Link>
      <Link id="btn-home" to="/"><h3>LH</h3></Link>
      <Link to="/competences"><h4>Compétences</h4></Link>
      <Link to="/interets"><h4>Intérêts</h4></Link>
      <Link to="/contacts"><h4>Contacts</h4></Link>
    </nav>
  );
};

export default Navbar;
