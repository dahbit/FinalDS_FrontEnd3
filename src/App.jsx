import './App.css';  
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FavsProvider } from "./context/FavContext";
import Home from "./pages/home/Home";
import Favs from "./pages/favs/Favs";
import CharacterDetail from "./pages/characterDetail/CharacterDetail";
import ContactForm from "./components/contactForm/contactForm";

function App() {
  return (
    <FavsProvider>
      <BrowserRouter>
      <nav className="nav">
  <Link to="/" className="link">Inicio</Link>
  <Link to="/favs" className="link">Favoritos</Link>
  <Link to="/contactForm" className="link">Contacto</Link>
</nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/characterDetail/:id" element={<CharacterDetail />} />
          <Route path="/contactForm" element={<ContactForm />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </FavsProvider>
  );
}



export default App;
