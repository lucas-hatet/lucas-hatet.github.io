import { jsx as _jsx } from "react/jsx-runtime";
import '../style/Home.css';
import TextFade from '../components/TextAnimations';
const Home = () => {
    return (_jsx("div", { children: _jsx(TextFade, { children: _jsx("h2", { children: "Bienvenue sur la page d'accueil !" }) }) }));
};
export default Home;
