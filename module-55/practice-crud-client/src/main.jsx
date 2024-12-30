import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Users from './components/Users/Users'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/users',
    loader:()=>fetch('http://localhost:5000/users'),
    element:<Users></Users>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
