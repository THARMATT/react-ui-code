import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound';

const AppLayout=()=>{
    return(
        <>
        <Header/>
        
        </>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<NotFound/>,
       
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)