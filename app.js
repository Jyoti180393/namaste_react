import React from "react";
import ReactDOM from "react-dom/client";
const resObj = {
  data: [
    {
      restName: "Meghana Foods",
      cuisine: ["Biryani", "North - Indian", "Mughal"],
      rating: 4.5,
      estinameDeliveryTime: "30 min",
      costForTwo: 400,
    },
    {
      restName: "Kfc",
      cuisine: ["Burger", "Nuggets", "Fastfood"],
      rating: 4.4,
      estinameDeliveryTime: "25 min",
      costForTwo: 350,
    },
  ],
};

// react component using JSX
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };
const RestaurantCard = (props) => {
  console.log(props);
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-logo"
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"
      ></img>
      <h3>{resData.restName}</h3>
      <h4>{resData.cuisine.join(", ")}</h4>
      <h4>{resData.rating} stars</h4>
      <h4>{resData.estinameDeliveryTime}</h4>
      <h4>{resData.costForTwo} for Two</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard resData={resObj.data[0]} />
        <RestaurantCard resData={resObj.data[1]} />
      </div>
    </div>
  );
};

console.log(<RestaurantCard />);
const element = <h1>Hello World!</h1>; // React Element using JSX
const AppLayout = () => {
  return (
    <div id="app-layout" className="app">
      {element}
      {<Header />}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
