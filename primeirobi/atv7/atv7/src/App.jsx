import { Routes, Route } from "react-router-dom";
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Aside from './Components/Aside.jsx';

import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import Servicos from './pages/Servicos.jsx';
import Contato from './pages/Contato.jsx';
import Container from "./Components/Container.jsx";

function App() {
  return (
    <>
      <Header />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>
      <Aside />
      <Footer />
    </>
  );
}

export default App;
