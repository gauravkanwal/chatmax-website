import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import {Tofuss,BichhooGang,Chatmax} from './Pages/index.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="chatmax" />} />
      <Route path='chatmax' element={<Chatmax />} />
      <Route path="bichhoo-g4ng" element={<BichhooGang />} />
      <Route path="tofuss" element={<Tofuss />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
