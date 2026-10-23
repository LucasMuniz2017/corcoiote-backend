import { createRoot } from "react-dom/client";

const container = document.querySelector('div');

if (container) {
  const root = createRoot(container);

  root.render('Hello World!');
}
