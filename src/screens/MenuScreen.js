import React from "react";
import "./MenuScreen.css";
import MenuScreenProduct from "./MenuScreenProduct";
import Items from "./MenuScreenProducts.json";

function MenuScreen() {
  return (
    <div className="menuScreen">
      <div className="menuScreen__left">
        <div className="menuScreen__leftItems">
          <h4>Drinks</h4>
          <p>Hot Coffees</p>
          <p>Hot Teas</p>
          <p>Hot Drinks</p>
          <p>Frappuccino Blended Beverages</p>
          <p>Cold Coffees</p>
          <p>Iced Teas</p>
          <p>Cold Drinks</p>
        </div>
        <div className="menuScreen__leftItems">
          <h4>Food</h4>
          <p>Hot Breakfast</p>
          <p>Bakery</p>
          <p>Lunch</p>
          <p>Snacks & Sweets</p>
          <p>Oatmeal & Yogurt</p>
        </div>
        <div className="menuScreen__leftItems">
          <h4>At Home Coffee</h4>
          <p>Whole Bean</p>
          <p>Verismo Pods</p>
          <p>VIA Instant</p>
        </div>
        <div className="menuScreen__leftItems">
          <h4>Merchandise</h4>
          <p>Cold Cups</p>
          <p>Tumblers</p>
          <p>Mugs</p>
          <p>Water Bottles</p>
          <p>Other</p>
          <p>Borrow a Cup Program</p>
        </div>
      </div>
      <div className="menuScreen__right">
        <h2>Menu</h2>
        <h3>Drinks</h3>
        <div className="menuScreen__rightGridCont">
          {Items.map((item) =>
            item.drinks.map((x) => (
              <MenuScreenProduct imgSrc={x.image} text={x.type} />
            ))
          )}
        </div>
        <h3>Food</h3>
        <div className="menuScreen__rightGridCont">
          {Items.map((item) =>
            item.food.map((x) => (
              <MenuScreenProduct imgSrc={x.image} text={x.type} />
            ))
          )}
        </div>
        <h3>At Home Coffee</h3>
        <div className="menuScreen__rightGridCont">
          {Items.map((item) =>
            item.atHomeCoffee.map((x) => (
              <MenuScreenProduct imgSrc={x.image} text={x.type} />
            ))
          )}
        </div>
        <h3>Merchandise</h3>
        <div className="menuScreen__rightGridCont">
          {Items.map((item) =>
            item.merchandise.map((x) => (
              <MenuScreenProduct imgSrc={x.image} text={x.type} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuScreen;
