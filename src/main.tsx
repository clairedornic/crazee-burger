import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './components/pages/login/LoginPage.tsx'
import { ErrorPage } from './components/pages/ErrorPage.tsx'
import { OrderPage } from './components/pages/OrderPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage></LoginPage>,
    errorElement: <ErrorPage></ErrorPage> 
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
