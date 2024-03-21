import React from 'react';
import ReactDOM from 'react-dom/client';

import { CountContextProvider } from './context/CountContext';

import { CardItem } from '@/components/sections/card-item/CardItem';

import './css/reset.css';
import './css/base.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CountContextProvider>
      <CardItem />
    </CountContextProvider>
  </React.StrictMode>
);
