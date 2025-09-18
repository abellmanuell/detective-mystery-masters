import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import CSS files
import "./index.css";
import "swiper/css";

// Import Components
import App from "./App.tsx";

/*******
 * Import Fonts
 * Supports weights 200-900
 ******/
import "@fontsource-variable/nunito";
import "@fontsource/bebas-neue";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
