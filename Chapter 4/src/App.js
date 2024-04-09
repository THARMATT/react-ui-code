import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import RestroMenu from './components/RestroMenu';

const AppLayout=()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<NotFound/>,
        children:[
            {
            path:"/",
        element:<Body/>,
        },
            {
            path:"/about",
        element:<About/>,
        },
            {
            path:"/contact",
        element:<Contact/>,
        },
            {
            path:"/restaurant/:id",
        element:<RestroMenu/>,
        },
    ]
       
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)