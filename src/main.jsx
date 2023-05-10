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
import SignUp from './Pages/SignUp/SignUp';
import AuthProviders from './Providers/AuthProviders';

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
  },
  {
    path:'sign-up',
    element: <SignUp></SignUp> 
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <React.StrictMode>
      <AuthProviders>
         <RouterProvider router={router}></RouterProvider>
      </AuthProviders>
  </React.StrictMode>
  </div>
)
