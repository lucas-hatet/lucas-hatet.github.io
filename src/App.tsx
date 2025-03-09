import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<NotFound />} />
        <Route path="/parcours" element={<NotFound />} />
        <Route path="/competences" element={<NotFound />} />
        <Route path="/projets" element={<NotFound />} />
        <Route path="/interets" element={<NotFound />} />
        <Route path="/contacts" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
