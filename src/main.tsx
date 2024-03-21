import React from 'react';
import ReactDOM from 'react-dom/client';

import { FullBoxProvider } from './context/FullBoxProvider';

import { CardItem } from '@/components/sections/card-item/CardItem';

import './css/reset.css';
import './css/base.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FullBoxProvider>
      <CardItem />
    </FullBoxProvider>
  </React.StrictMode>
);
