import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Presentation from "./pages/Presentation.tsx";
import Parcours from "./pages/Parcours.tsx";
import NotFound from "./pages/NotFound.tsx";

import Navbar from "./components/Navbar.tsx";
import ToggleButton from './components/ToggleButton.tsx';

function App() {
  return (
    <Router>
      <Navbar />
      <ToggleButton
        onClick={() => {
          document.body.classList.toggle('dark');
          document.body.classList.toggle('light');
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
          <path d="M2.72 0c-1.58.53-2.72 2.02-2.72 3.78 0 2.21 1.79 4 4 4 1.76 0 3.25-1.14 3.78-2.72-.4.13-.83.22-1.28.22-2.21 0-4-1.79-4-4 0-.45.08-.88.22-1.28z" />
        </svg>
      </ToggleButton>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/parcours" element={<Parcours />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
