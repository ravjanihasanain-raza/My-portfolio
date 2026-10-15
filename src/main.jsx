
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import '@fontsource/sora/400.css';
import '@fontsource/sora/500.css';
import '@fontsource/sora/600.css';
import '@fontsource/sora/700.css';

import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

import '@fontsource/cormorant-garamond/500.css';

import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
