// App.jsx
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Casa from "./pages/Casa";
import Entorno from "./pages/Entorno";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/casa" element={<Casa />} />
          <Route path="/entorno" element={<Entorno />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
