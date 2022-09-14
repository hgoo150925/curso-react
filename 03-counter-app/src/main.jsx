import React from 'react';
import ReactDOM from 'react-dom/client';

import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* FirstApp es el componente padre 
      title es la prop que se envia al componente hijo
    */}

    <FirstApp title="oka" />
  </React.StrictMode>
);
