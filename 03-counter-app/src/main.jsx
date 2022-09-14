import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional components vs Class components
// https://medium.com/@brenditech/functional-components-vs-class-components-e6eaecba7562

function App() {
  // document.createElement...
  return <h1>Hola</h1>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
