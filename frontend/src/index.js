import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Admin from './Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    {/* Comment out the Admin component  */}
    {/* <Admin />*/}
  </React.StrictMode>
);
