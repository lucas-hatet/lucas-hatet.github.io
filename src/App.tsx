import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Presentation from "./pages/Presentation.tsx";
import Parcours from "./pages/Parcours.tsx";
import NotFound from "./pages/NotFound.tsx";

import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <Router>
      <Navbar />
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
