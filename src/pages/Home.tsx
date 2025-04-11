import '../style/Home.css';
import { MultipleTextIntro } from '../components/Animations.tsx';

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
        <h3>Bienvenue sur mon portfolio</h3>
      </section>
      <section class="column">
        <div id="menu">
          <p></p>
          <button>Présentation</button>
          <span>
            <button>Mon CV</button>
            <button>Contacts</button>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
