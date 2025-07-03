import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./App.css";

//IMportaciones de Paginas
import Inicio from "./pages/Inicio";
import Home from "./pages/Home";
import FixedSite from "./pages/FixedSite";
import Maritime from "./pages/Maritime";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/fixed-site" element={<FixedSite />} />
        <Route exact path="/maritime" element={<Maritime />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
