import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Listagem from "./pages/Listagem";
import "./css/style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/listagem/:id?" element={<Listagem />} />
        <Route index path="/formulario" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}
