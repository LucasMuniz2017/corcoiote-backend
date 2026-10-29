import { createRoot } from "react-dom/client";

import App from "./App.tsx";

const container = document.querySelector('div');

if (container) {
  const root = createRoot(container);

  root.render(<App/>);
}
