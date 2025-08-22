import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'; 
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import PageNotFound from './components/PageNotFound.jsx';

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound/>
  },
  
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
