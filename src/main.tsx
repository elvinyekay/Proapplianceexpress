import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/index.scss';
import { StrictMode } from 'react';

const root = document.getElementById('root');

ReactDOM.createRoot(root as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
