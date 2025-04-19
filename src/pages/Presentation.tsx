import '../styles/Presentation.css';
import Button from '../components/Button.tsx';

const Presentation = () => {
  return (
    <div className="container">
      <section className="column" id="column-left">
        <h5 id="title">Lucas HÂTET, 
          <span> développeur</span>
        </h5>
        <p>
          J'ai commencé à me tourner vers le développement dès le collège,
          où j'ai appris les bases de la programmation avec Python grâce aux tutos sur YouTube.
          Je me suis donc naturellement tourné vers un <span>Bac général (Spé Maths & NSI)</span>,
          que j'ai obtenu courant 2023 (Avec mention).
        </p>
        <p>
          Après ça j'ai voulu démarrer mes études à Annecy, où je suis actuellement
          en <span>2e année de BUT informatique</span>. J'ambitionne de partir à l'étranger sous peu,
          pour valider ma 3e année avec une double-diplomation (BUT Info + Baccalauréat canadien).
          Sur le moyen terme je souhaiterais poursuivre mes études jusqu'à un master,
          probablement en front-end ou dans l'IA.
        </p>
        <p>
          Je suis plutôt <span>curieux, ambitieux et avide d'apprendre</span>, et tout ça m'a permis
          d'en apprendre plus sur le développement par moi-même : TypeScript, React, C++, ...
          Je m'intéresse également à d'autres choses comme le design, la 3D, le sport, le jeu vidéo, ...
          Plutôt polyvalent qu'expert à vrai dire.
        </p>
        <div id="two-buttons" className="two-buttons">
          <Button to="/parcours" btnclass="arrow">Parcours</Button>
          <Button to="/competences" btnclass="arrow">Compétences</Button>
        </div>
      </section>
      <section className="column" id="column-right">
      </section>
    </div>
  );
};

export default Presentation;
