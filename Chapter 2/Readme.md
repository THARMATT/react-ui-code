# Workflow

## Basic Setup Instructions

Follow these steps to make this project from scratch:

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

## Running the Base Project

To start the development server, run:

```bash
npm start
```

To build the project for production, run:

```bash
npm run build
```
## Define App Structure

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


## Next Steps to Enhance our application

### 1. Design Card Component

Create a `Card` component to display information about restaurants or any other entities. The card should include details such as title, image, description, etc.

```jsx
// Card.js
import React, { useState } from 'react'


const Card = ({data}) => {

  return (
    <div className="card-grid">
      {data.map((data)=>(
        <div key={data.title} className='card'>
        <img className='card-img' src={data.image} alt="carditems" />
        <div className="card-items">
          <h1 className="card-name">
            {data.title}
          </h1>
          <p className="descr">{data.description}</p>
          <p className="author">{data.author}</p>
  
        </div>
        </div>
      ))}
    
    </div>
  )
}

export default Card


```

### 2. Design Header Component

Design a `Header` component for the top navigation of the application. It should include branding, navigation links, or any other relevant information.

```jsx
// Header.js
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">KhanSama's</div>
      <div className="nav-items">
        <Link className='nav-link' to="/">Home</Link> 
        <Link className='nav-link' to="/about">About</Link> 
        <Link className='nav-link' to="/contact">Contact</Link> 
        
       
      </div>
    </div>
  )
}

export default Header


```

### 3. Implement Search Functionality in Body Component

Integrate search functionality in the `Body` component to filter data based on user input. Update the `Body` component to include a search input field and a button for triggering the search.

```jsx
// Body.js

import React, { useEffect, useState } from 'react';
import Card from './Card';
import { dummyData } from '../config/constant';

const Body = () => {
  const [dummy, setDummy] = useState(dummyData);
  const [searchInput, setSearchInput] = useState('');

  function filterData(searchInput, dummy) {
    const filteredData = dummy.filter((restro) =>
      restro.title?.toLowerCase()?.includes(searchInput?.toLowerCase())
    );
    return filteredData;
  }

  const handleSearch = () => {
    const filteredData = filterData(searchInput, dummy);
    setDummy(filteredData);
  };

  useEffect(() => {
    // Fetch data or perform any other necessary actions
  }, []);

  return (
    <div>
      <div className="searchBar">
        <input
          className="search-input"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          name=""
          id=""
        />
        <button className='search-button' onClick={handleSearch}>Search</button>
      </div>
      <div className="cards">
        <Card data={dummy} />
      </div>
    </div>
  );
};

export default Body;
```

### 4. Add Styling

Style the components using CSS or any preferred styling method to enhance the visual appearance of the application.

### 5. Integrate Data Fetching

Implement data fetching functionality in the `Body` component to fetch real data from the provided API endpoint. Update the `getData` function to fetch data from the endpoint and display it in the application.

```javascript
// Body.js

async function getData() {
  try {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=330424&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER';
    const response = await fetch(proxyUrl + apiUrl);
    const json = await response.json();
    console.log(json.data);
    // Update state or perform necessary operations with fetched data
  } catch (error) {
    console.error(error.message);
  }
}
```

