

# Work flow



### Step 1: Setting up Components

1. **Title Component:**
   - Creates a simple component for the title.
   - Includes an image for the logo.

```jsx
const Title = () => {
    return (
        <>
            <img src="https://th.bing.com/th/id/OIP.FpBTdmS425XMYJ6kJH-fVAHaHd?rs=1&pid=ImgDetMain" className='logo' alt="logo" />
        </>
    )
}
```

2. **Header Component:**
   - Constructs the header with the title and navigation items.

```jsx
const HeaderComponent = () => {
    return (
        <div className='header'>
            <Title />
            <div className="nav-items">
                <ul>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
```

3. **SearchBar Component:**
   - Creates a search bar component.

```jsx
const SearchBar = () => {
    return (
        <div className='searchbar'>
           <div className="input">
               <input type="text" className='inputBox'  />
           </div>
           <div className="searchIcon">Search</div>
        </div>
    )
}
```

4. **Card Component:**
   - Defines a card component to display raw data.

```jsx
const Card=({item})=>{
    const{image,speciality,name,rating,type}=item
    return(
        <div className="card">
            <img  className='card-img' src={image} alt="img" />
            <div className="card-items">
                <h2 className="card-name">{name}</h2>
                <h3 className="card-speciality">{speciality}</h3>
                <h4 className="card-type">{type}</h4>
                <h4 className="card-rating">{rating}</h4>
            </div>
        </div>
    )
}
```

5. **Body Component:**
   - Combines the search bar and card components.

```jsx
const Body = () => {
    return (
        <div className='body'>
            <div className="search">
                <SearchBar />
            </div>
            <div className="cards">
                {data.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
        </div>
    )
}
```

6. **Footer Component:**
   - Creates a simple footer component.

```jsx
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <p>&copy; 2024 @nigam sharma, All rights reserved.</p>
            </div>
        </div>
    )
}
```

### Step 2: Layout Composition

1. **Layout Component:**
   - Combines header, body, and footer components.

```jsx
const LayoutComponent = () => {
    return (
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>
    )
}
```

### Step 3: Rendering

1. **Render Components:**
   - Render the layout component onto the root element.

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LayoutComponent/>)
```




# Theory

### JSX

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It's a syntactic sugar that makes writing React components more intuitive and readable.

In the provided code, JSX is extensively used to define the structure and appearance of various components like `HeaderComponent`, `SearchBar`, `Card`, `Body`, `Footer`, and `LayoutComponent`.

### Benefits of JSX

1. **Readable Syntax**: JSX resembles HTML, making it easier for developers to understand and visualize the structure of their UI components.

2. **Declarative**: JSX allows developers to describe what the UI should look like, rather than imperatively defining each step.

3. **Integration of JavaScript Expressions**: JSX allows embedding JavaScript expressions within curly braces `{}` directly within the markup, enabling dynamic content rendering.

### Behind the Scenes of JSX

When you write JSX code, it needs to be transpiled into regular JavaScript code because browsers cannot interpret JSX directly. This is where tools like Babel and Parcel come into play.

- **Babel**: Babel is a JavaScript compiler that transforms JSX into equivalent JavaScript code. It allows developers to use the latest JavaScript features and experimental syntax.

- **Parcel**: Parcel is a web application bundler that automates the process of building your project. It can compile JSX code using Babel and bundle all your assets for deployment.

### Components

Components are the building blocks of React applications. They encapsulate reusable pieces of UI. In the provided code:

- `HeaderComponent`, `SearchBar`, `Card`, `Body`, `Footer`, and `LayoutComponent` are all React components.

### Functional Components

Functional components are simpler, lightweight components defined as JavaScript functions. They accept props (inputs) and return JSX (output). In the provided code:

- `Title`, `HeaderComponent`, `SearchBar`, `Card`, `Body`, and `Footer` are functional components.

### Composing Components

React components can be composed together to build complex UIs. In the provided code:

- `LayoutComponent` composes `HeaderComponent`, `Body`, and `Footer`.

### Role of type attribute in script tag? What options can I use there?

The `type` attribute in the `<script>` tag specifies the scripting language of the content. In modern React applications, JSX is typically used. Common values for the `type` attribute include:

- `text/javascript`: Specifies JavaScript code.
- `text/jsx`: Specifies JSX code.

In the provided code, the JSX code is written directly within JavaScript files, so the `type` attribute is not explicitly specified. However, in some setups, you might see `type="text/jsx"` being used to indicate that the script contains JSX code.
