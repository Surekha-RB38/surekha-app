import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Pricing from './components/Pricing.jsx';
import Aboutus from './components/Aboutus.jsx';
import Countries from './components/Countries.jsx';
import CountryDetails from './components/CountryDetails.jsx';

const router =createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/price",
        element:<Pricing></Pricing>
      },
      {
        path:"/aboutus",
        element:<Aboutus></Aboutus>
      },
      {
        path:"/studentRegistration",
        element:<Student></Student>
      },
      {
        path:"/countries",
        element:<Countries></Countries>,
        children:[
          {
            path:"/countries/countryDetails/:cname",
            element:<CountryDetails></CountryDetails>
          }
        ]
      },
      
    ]
  },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
