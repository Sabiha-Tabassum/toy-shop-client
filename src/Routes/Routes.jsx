import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AllToys from "../Pages/AllToys/AllToys";
import MyToy from "../Pages/MyToy/MyToy";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import UpdateData from "../Pages/UpdateData/UpdateData";
import PrivateRoute from "../Providers/PrivateRoute/PrivateRoute";
import Details from "../Pages/Details/Details";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },

        {
            path: 'login',
            element: <Login></Login>
        },

        {
            path: 'signup',
            element: <SignUp></SignUp>
        },

        {
            path: 'alltoys',
            element: <AllToys></AllToys>
        },

        {
            path: 'mytoy',
            element: <MyToy></MyToy>
        },

        {
            path: 'blog',
            element: <Blog></Blog>
        },

        {
            path: 'addtoy',
            element: <AddToy></AddToy>
        },

        {
            path: 'details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader: ({params}) => fetch(`https://toy-shop-backend-vert.vercel.app/allToys/${params.id}`)
        },

        {
            path: 'updateData/:id',
            element: <UpdateData></UpdateData>,
            loader: ({params}) => fetch(`https://toy-shop-backend-vert.vercel.app/addToy/${params.id}`)
        }
      ]
    },
  ]);