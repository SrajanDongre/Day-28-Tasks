import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import FormikCom from "./FormikCom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FormikCom />
  </StrictMode>
);