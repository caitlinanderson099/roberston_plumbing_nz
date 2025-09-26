import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';


createRoot(document.getElementById('root')).render(
  <HelmetProvider>
   <React.StrictMode>
      <App />
  </React.StrictMode>
  </HelmetProvider>
)
