# Workflow

## Setup Instructions

Follow these steps to make this project from stracth:

### 1. Initialize npm

Run the following command to initialize npm:

```bash
npm init
```

Follow the prompts to initialize your `package.json` file.

### 2. Create Files and Folders

Create the following files and folders structure:

```
- index.html
- index.css
- src/
  - components/
  - App.js
```

### 3. Link Files

In your `index.html` file, link your CSS file and import React:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App</title>
  <link rel="stylesheet" href="index.css">
</head>
<body>
  <div id="root"></div>
  <script src="src/App.js"></script>
</body>
</html>
```

### 4. Install Dependencies

Install the necessary dependencies using npm:

```bash
npm install react react-dom react-router-dom parcel-bundler
```

### 5. Configure Scripts

In your `package.json` file, add the following scripts:

```json
{
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

## Running the Project

To start the development server, run:

```bash
npm start
```

To build the project for production, run:

```bash
npm run build
```
## App Structure

The `App.js` file contains the main structure of the React application. It imports necessary components and sets up routing using `react-router-dom`.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
```
