import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

// Components
import Discover from './page/Discover'
import Login from './page/Login';
import SignIn from './page/SignIn';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Discover />,
  },
  {
    path: "signin",
    element: <SignIn/>
  },
  {
    path: "login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
