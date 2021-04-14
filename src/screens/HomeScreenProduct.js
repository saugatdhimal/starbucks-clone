import React from "react";
import "./HomeScreenProduct.css";
import { Fade } from "react-awesome-reveal";
import NormalButton from "../buttons/NormalButton";

function HomeScreenProduct({ buttonText, imgSrc, title, description, color, background }) {
  return (
    <Fade>
      <div className="homeScreenProduct" style={{color, background}}>
        <div className="homeScreenProduct__Left">
          <img src={imgSrc} alt="" />
        </div>
        <div className="homeScreenProduct__Right">
            {title ? <h2>{title}</h2> : ''}
          <p>{description}</p>
          <NormalButton text={buttonText} color={color}/>
        </div>
      </div>
    </Fade>
  );
}

export default HomeScreenProduct;
