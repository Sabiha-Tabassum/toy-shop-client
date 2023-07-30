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


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
            loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
        },

        {
            path: 'updateData/:id',
            element: <UpdateData></UpdateData>,
            loader: ({params}) => fetch(`http://localhost:5000/addToy/${params.id}`)
        }
      ]
    },
  ]);