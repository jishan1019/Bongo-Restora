import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './component/ErrorPage/ErrorPage.jsx';
import Home from './component/Layout/Home.jsx';
import Blog from './component/Layout/Blog.jsx';
import Login from './component/Layout/Login.jsx';
import Regestation from './component/Layout/Regestation.jsx';
import SingleChefRecepi from './component/Layout/SingleChefRecepi.jsx';
import AuthProvider from './component/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './component/PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/regestation',
        element: <Regestation />
      },
      {
        path: 'singleChepRecepi/:id',
        element: (<PrivateRoute>
          <SingleChefRecepi />
        </PrivateRoute>)
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
