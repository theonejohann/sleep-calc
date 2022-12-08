import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ButtonAppBar from './ButtonAppBar.js';
import InputFields from './InputFields.js';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ButtonAppBar />
    <InputFields />
  </StrictMode>
);
