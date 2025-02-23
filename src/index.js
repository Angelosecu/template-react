import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// Importar estilos de Ant Design v5
import 'antd/dist/reset.css';
import App from "./App";

// Habilitar el flag v7_startTransition
const router = {
  future: {
    v7_startTransition: true,
  },
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter {...router}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
