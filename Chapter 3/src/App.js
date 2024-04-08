import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client'
import HeaderComponent from './components/HeaderComponent';
import Body from './components/Body';
import Footer from './components/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestorantMenu from './components/RestorantMenu';
import ShimmerUi from './components/ShimmerUi';


const MyComponent=lazy(()=>{ return import("./components/Fun")})

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      
      <Outlet />
    
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: `/restaurant/:id`,
        element: <RestorantMenu />
      },
      {
        path: `/fun`,
        element: <Suspense fallback={<ShimmerUi/>}><MyComponent /></Suspense>
      }
    ]
  },


])


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);
