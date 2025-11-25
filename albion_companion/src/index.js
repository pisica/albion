import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the modern import for React 18
import App from './App'; // Import the main App component

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

