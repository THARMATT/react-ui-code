import React from 'react'
import ReactDOM from 'react-dom/client'

const data = [
    {
      image: "https://source.unsplash.com/featured/?cake",
      name: "Chocolate Cake",
      rating: 4.5,
      type: "Dessert",
      speciality: "Rich and indulgent"
    },
    {
      image: "https://source.unsplash.com/featured/?cupcake",
      name: "Vanilla Cupcake",
      rating: 4.3,
      type: "Dessert",
      speciality: "Light and fluffy"
    },
    {
      image: "https://source.unsplash.com/featured/?muffin",
      name: "Blueberry Muffin",
      rating: 4.2,
      type: "Breakfast",
      speciality: "Moist and flavorful"
    },
    {
      image: "https://source.unsplash.com/featured/?donut",
      name: "Glazed Donut",
      rating: 4.6,
      type: "Dessert",
      speciality: "Sweet and satisfying"
    },
    {
      image: "https://source.unsplash.com/featured/?croissant",
      name: "Butter Croissant",
      rating: 4.4,
      type: "Pastry",
      speciality: "Flaky and buttery"
    },
    {
      image: "https://source.unsplash.com/featured/?pancake",
      name: "Blueberry Pancake",
      rating: 4.7,
      type: "Breakfast",
      speciality: "Fluffy and fruity"
    },
    {
      image: "https://source.unsplash.com/featured/?waffle",
      name: "Belgian Waffle",
      rating: 4.8,
      type: "Breakfast",
      speciality: "Crispy and golden"
    },
    {
      image: "https://source.unsplash.com/featured/?macaron",
      name: "French Macaron",
      rating: 4.9,
      type: "Dessert",
      speciality: "Delicate and colorful"
    },
    {
      image: "https://source.unsplash.com/featured/?eclair",
      name: "Chocolate Eclair",
      rating: 4.7,
      type: "Pastry",
      speciality: "Decadent and creamy"
    },
    {
      image: "https://source.unsplash.com/featured/?tiramisu",
      name: "Tiramisu",
      rating: 4.6,
      type: "Dessert",
      speciality: "Italian classic"
    }
  ];

 
  
const Title = () => {
    return (
        <>
            <img   src="https://th.bing.com/th/id/OIP.FpBTdmS425XMYJ6kJH-fVAHaHd?rs=1&pid=ImgDetMain" className='logo' alt="logo" />
        </>
    )
}


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
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
        <p>&copy; 2024 @nigam sharma, All rights reserved.</p>
      </div>

        </div>
    )
}
const LayoutComponent = () => {
    return (
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LayoutComponent/>)
