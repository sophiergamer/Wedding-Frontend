import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'
import './index.css';
import Home from './Routes/Home.js'
import Gifts from './Routes/Gifts.js'
import Info from './Routes/Info.js'
import SongPage from './Routes/SongPage.js';
import RSVP from './Routes/RSVP.js'
import reportWebVitals from './donttouch/reportWebVitals.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"Home",
        element: <Home/>,
        loader: async () => fetch('http://localhost:3000/PhotoGallery').then(response=>response.json())
      },
      {
        path: "RSVP",
        element: <RSVP/>
      },
      {
        path:"Gifts",
        element: <Gifts/>
      },
      {
        path: "Info",
        element: <Info/>
      },
      {
        path:'SongPage',
        element: <SongPage/>,
        loader: async () => fetch('http://localhost:3000/Songs').then(response=>response.json())
      },
    ]
  },
 
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();