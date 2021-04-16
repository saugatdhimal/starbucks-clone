import React from "react";
import "./FeaturedScreen.css";
import HomeScreenProduct from "./HomeScreenProduct";

function FeaturedScreen() {
  return (
    <div className="featureScreen">
      <div className="featuredScreen__top">
        <h2>YOU DESERVE SOME SPRING</h2>
        <p>Treat yourself to the season’s most inspiring tastes.</p>
      </div>
      <div className="featuredScreen__gridCont">
        <HomeScreenProduct
          title="Pineapple Matcha Drink"
          description="Creamy coconutmilk with premium matcha tea and a fruity twist."
          imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-69968.png"
          buttonText="Order now"
          background="#d4e9e2"
        />
        <HomeScreenProduct
          title="Guava Passionfruit Drink"
          description="Bursting with tropical flavors combined with coconutmilk."
          imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-69967.png"
          buttonText="Order now"
          background="#d4e9e2"
        />
        <HomeScreenProduct
          title="Vanilla Sweet Cream Cold Brew"
          description="Smooth and balanced with a splash of house-made vanilla sweet cream."
          imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70216.png"
          buttonText="Order cold brew"
          background="#d4e9e2"
        />
        <HomeScreenProduct
          title="Salted Caramel Cream Cold Brew"
          description="Slow-steeped coffee topped with a touch of caramel and salted cold foam."
          imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70217.png"
          buttonText="Order cold brew"
          background="#d4e9e2"
        />
      </div>
    </div>
  );
}

export default FeaturedScreen;
