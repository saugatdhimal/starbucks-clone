import React from 'react'
import './RewardScreen.css'

function RewardScreen() {
    return (
        <div className="rewardScreen">
            <div className="rewardScreen__top">
                <p>starbucks<span>&reg;</span>  &nbsp; rewards</p>
            </div>
            <div className="rewardScreen__img">
                <img 
                src="https://assets.mystarbucks.com.au/imagecache/bestfit/840x336//_files/Promo/starbucks-rewards-website-tile-2020.jpg"
                alt=""
                />
            </div>
        </div>
    )
}

export default RewardScreen
