import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Router from './routes/Router'
// import Router from './routes/router'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Router'
// // import App from './App.jsx'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router}></RouterProvider>

  </StrictMode>,
)
