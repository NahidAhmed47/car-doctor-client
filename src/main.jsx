import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path:'login',
    element: <Login></Login> 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  </div>
)
