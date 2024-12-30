import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';


const router = createBrowserRouter([
{
  path: "/",
  element: <App></App>,
  loader: () => fetch("http://localhost:5000/coffees")
},
{
  path: "/addcoffee",
  element: <AddCoffee></AddCoffee>
},
{
  path: "/updatecoffee",
  element:<UpdateCoffee></UpdateCoffee>
},


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
