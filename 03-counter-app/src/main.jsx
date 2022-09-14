import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* FirstApp es el componente padre 
      title es la prop que se envia del componente padre al componente hijo
    */}

    {/* <FirstApp title="oka" /> */}
    <CounterApp value={5} />
  </React.StrictMode>
);
