import '../style/Home.css';
import { HollowtextIntro } from '../components/Animations.tsx';

const Home = () => {
  return (
    <div>
        <HollowtextIntro><h2>Bienvenue</h2></HollowtextIntro>
        <HollowtextIntro delay={1}><h2>Sur la page d'accueil !</h2></HollowtextIntro>
    </div>
  );
};

export default Home;
