import React from 'react'
import './MenuScreenProduct.css'

function MenuScreenProduct({imgSrc, text}) {
    return (
        <div className="menuScreenProduct">
            <img 
            src={imgSrc}
            alt=""
            />
            <p>{text}</p>
        </div>
    )
}

export default MenuScreenProduct
