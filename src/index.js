import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Root component for Fast React Pizza Co. menu application.
 * @returns {JSX.Element}
 */
function App() {
  return <h1>Fast React Pizza Co.</h1>;
}

// React v18 root container mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
