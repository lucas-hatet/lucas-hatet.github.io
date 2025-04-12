import '../style/Home.css';
import { MultipleTextIntro } from '../components/Animations.tsx';
import Button from '../components/Button.tsx';

const Home = () => {
  return (
    <div class="container">
      <section class="column">
        <div id="nom">
          <MultipleTextIntro>
            <h2>LUCAS</h2>
            <h1>HATET</h1>
          </MultipleTextIntro>
        </div>
      </section>
      <section id="column-right" class="column">
        <h1 id="welcome">Bienvenue sur mon portfolio</h1>
        <div id="menu">
          <Button to="/presentation">Présentation</Button>
          <div class="button-double">
            <Button to="/presentation">CV</Button>
            <Button to="/presentation">Contacts</Button>
          </div>
        </div>
        <p>
          ⚠ Je recherche activement un stage dans le domaine du développement (web, application, mobile, ...),
          pour une durée de 8 à 12 semaines. Contactez-moi si vous êtes intéressé !
        </p>
      </section>
    </div>
  );
};

export default Home;
