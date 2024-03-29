import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../sass/main.scss';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from "../component/ErrorFallback.jsx";
import 'react-toastify/dist/ReactToastify.css';
import Snow from "./Snow.jsx"
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary  FallbackComponent={ErrorFallback}  >
    {/* <Snow/> */}
    <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
