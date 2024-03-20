import React from 'react';
import ReactDOM from 'react-dom/client';

import { CardItem } from '@/sections/card-item/CardItem';

import './css/reset.css';
import './css/fonts.css';
import './css/base.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CardItem />
  </React.StrictMode>
);
