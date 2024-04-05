import React from 'react';
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RestaurantMenu from './components/RestaurantMenu';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
