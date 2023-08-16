/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShopElec from './pages/ShopElec';
import ShopCars from './pages/ShopCars';
import DetailsCar1 from './pages/DetailsCar1';
import DetailsCar2 from './pages/DetailsCar2';
import DetailsElec1 from './pages/DetailsEelec1';
import DetailsElec2 from './pages/DetailsElec2';
import About from './pages/About';
import ShopWears from './pages/ShopWears';
import DetailsWears1 from './pages/DetailsWears1';
import DetailsWears2 from './pages/DetailsWears2';
import PaymentElec1 from './pages/PaymentElec1';
import PaymentElec2 from './pages/PaymentElec2';
import PaymentCar1 from './pages/PaymentCar1';
import PaymentCar2 from './pages/PaymentCar2';
import PaymentWear1 from './pages/PaymentWear1';
import PaymentWear2 from './pages/PaymentWear2';





const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopElec/>,
    errorElement:<h1>lemosssssssssssoo</h1>
  },
  {
    path: "/ShopCars",
    element: <ShopCars/>,
  },
  {
    path: "/DetailsCar1",
    element: <DetailsCar1/>,
  },
  {
    path: "/DetailsCar2",
    element: <DetailsCar2/>,
  },
  {
    path: "/DetailsElec",
    element: <DetailsElec1/>,
  },
  {
    path: "/DetailsElec2",
    element: <DetailsElec2/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/ShopWears",
    element: <ShopWears/>,
  },
  {
    path: "/DetailsWears1",
    element: <DetailsWears1/>,
  },
  {
    path: "/DetailsWears2",
    element: <DetailsWears2/>,
  },
  {
    path: "/PaymentElec1",
    element: <PaymentElec1/>,
  },
  {
    path: "/PaymentElec2",
    element: <PaymentElec2/>,
  },
  {
    path: "/PaymentCar1",
    element: <PaymentCar1/>,
  },
  {
    path: "/PaymentCar2",
    element: <PaymentCar2/>,
  },
  {
    path: "/PaymentWear1",
    element: <PaymentWear1/>,
  },
  {
    path: "/PaymentWear2",
    element: <PaymentWear2/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

serviceWorkerRegistration.register();




