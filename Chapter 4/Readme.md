# Workflow

## 1.Setup

Follow these steps to initialize your repository and set up your React app with Parcel bundler and Tailwind CSS.

### 1. Initialize NPM

```bash
npm init -y
```

### 2. Install Dependencies

```bash
npm install react react-dom --save-dev parcel react-router-dom 
```

### 3. Ignite Your App with Parcel

Create your React app entry point (e.g., `App.js`) and your HTML template (e.g., `index.html`), then use Parcel to bundle them.

### 4. Setup Tailwind CSS

- Install dependencies
```js
npm install -D tailwindcss postcss
npx tailwindcss init
```
- Add .postcssrc
```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
- Add tailwind directives to index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Add Scripts for Start and Build

Update your `package.json` to include scripts for starting the development server and building for production.

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}
```

### 6. Add .gitignore File

Create a `.gitignore` file to exclude `node_modules` and any other files or directories that shouldn't be committed to Git.

Example `.gitignore`:

```plaintext
node_modules/
dist/
```
### 7. Configure App.js 

```js
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
```

## 2.Configure Swiggy API, Routing & Design Components with Tailwind
- App.jsx
```js
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
```
- Body.jsx
```js
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Search from './Search'
import { RESTRO_URL } from '../config/constants';
import { Link } from 'react-router-dom';
import useRestro from '../utils/useRestro';
import Shimmer from './Shimmer';

const Body = () => {
   const Restro=useRestro()
  return Restro.length===0?(<Shimmer/>):(
    <div className='h-full w-full p-12'>
      <div className="search">
<Search/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {Restro.map((restaurant,index)=>(

            <Link key={index} to={"/restaurant/"+ restaurant.info.id} ><Card  {...restaurant.info}/></Link>
        ))}
      </div>
    </div>
  )
}

export default Body
```
- RestroCard.jsx
```js
import React, { useEffect, useState } from 'react';
import { useParams}  from 'react-router-dom'
import { IMG_CDN_URL, MENU_URL } from '../config/constants';

const RestroMenu = () => {
    const[menu ,setMenu]=useState([]);
   const {id}= useParams()
    console.log(id)
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        const proxyUrl = "https://cors-anywhere.herokuapp.com/";
        const apiUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`;
    
        const response = await fetch(proxyUrl + apiUrl);
        const json = await response.json();
        console.log(json.data);
        const items = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];
        setMenu(items);
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4'>
    {menu.map((itemCard, index) => (
        <div key={index} className='border shadow-md w-72 min-h-72 p-4'>
            <img className='w-60 rounded-sm h-[200px]' src={ IMG_CDN_URL + itemCard.card.info.imageId} alt="img" />
            <div className="card-items">
                <h4 className="text-xl">{itemCard.card.info.name}</h4>
                <p className="text-sm">{}</p>
                <p className="text-sm">Rs:{parseFloat(itemCard.card.info.price/100).toFixed(2)}</p>
            </div>
        </div>
    ))}
</div>
  )
}

export default RestroMenu
```
- Card.jsx
```js
import React from 'react'
import { IMG_CDN_URL } from '../config/constants'

const Card = ({
    cloudinaryImageId,name,price,areaName
}) => {
  return (
    <div className='border shadow-md w-72 min-h-72 p-4'>
        <img  className='w-60 rounded-sm h-[200px]' src={IMG_CDN_URL+cloudinaryImageId} alt="img" />
        <div className="card-items">
            <h4 className="text-xl">{name}</h4>
            <p className="text-sm">{areaName}</p>
            {/* <p className="text-sm">Rs:{price}</p> */}
         
        </div>
      
    </div>
  )
}

export default Card
```

