

import React from "react";
import { createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import 'index.css';

import { VisionUIControllerProvider } from "context";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(<BrowserRouter>
  <VisionUIControllerProvider>
    <App />
  </VisionUIControllerProvider>
</BrowserRouter>)

