import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/public/images/water trees.jpeg"
              text="Explore the hidden waterfall deep inside the forests"
              label="Adventure"
              path="/destinations"
            />
            <CardItem
              src="/public/images/rishikesh.jpeg"
              text="Enjoy your stay in Rishikesh!"
              label="Luxury"
              path="/destinations"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/public/images/house.jpeg"
              text="Experience peace "
              label="Mystery"
              path="/destinations"
            />
            <CardItem
              src="/public/images/kedar.jpeg"
              text="In the realm of the Almighty"
              label="Adventure"
              path="/destinations"
            />
            <CardItem
              src="/public/images/trees.jpeg"
              text="Come on this amazing tour"
              label="Adrenaline"
              path="/SignUp"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
