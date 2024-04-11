import React from 'react'
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Notfound from './components/Notfound';
import Menu from './components/Menu';
import About from './components/About';
import store from './store/store'
import{ Provider} from 'react-redux'

const AppLayout=()=>{
    return(
        <Provider store={store}>
        <Header/>
        <Outlet/>
        </Provider>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Notfound/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:'restaurant/:id',
                element:<Menu/>
            },
            {
                path:'about',
                element:<About/>
            }
        ]
    }
])
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)