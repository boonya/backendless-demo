import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ApolloProvider from './providers/Apollo';
import App from './modules/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);