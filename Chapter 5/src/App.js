import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import NotFound from './components/NotFound';
import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom';
import Body from './components/Body';
import RestroMenu from './components/RestroMenu';
import About from './components/About';
import Contact from './components/Contact';
import UserContext from './utils/UserContext';

const AppLayout = () => {
    const [user, setUser] = useState({
name:"Sharma",
gmail:"gmail"
    })
  return (
    <UserContext.Provider value={{user:user,setUser:setUser}}>
      <Header/>
      <Outlet/>
    </UserContext.Provider>
  )
}
const appRouter=createBrowserRouter([{
element:<AppLayout/>,
path:'/',
errorElement:<NotFound/>,
children:[
    {
        element:<Contact/>,
        path:'/contact',
    },
    {
        element:<About/>,
        path:'/about',
    },
    {
        element:<RestroMenu/>,
        path:'/restaurant/:id',
    },
    {
        element:<Body/>,
        path:'/',
    }
]
}])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>)
