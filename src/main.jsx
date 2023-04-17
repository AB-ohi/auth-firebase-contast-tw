import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/LayOut/Main';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import AuthProvider from './Provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/logIn",
        element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
