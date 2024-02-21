import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from './context/authProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App/>
    {/* <AuthProvider>
    </AuthProvider> */}
  </React.StrictMode>
    
);
