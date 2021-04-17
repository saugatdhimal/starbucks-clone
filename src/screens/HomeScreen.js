import { Fade } from "react-awesome-reveal";
import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import HomeScreenProduct from "./HomeScreenProduct";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Fade>
        <div className="homeScreen__top">
          <p>
            Wee require facial coverings in all stores to protect the health of
            our customers and partners (employees), and help stop the spread of
            COVID-19. <Link onClick={() => alert("You can go to www.starbucks.com to Learn More. ( Thank You )")}>Learn more</Link>
          </p>
        </div>
      </Fade>
      <div className="homeScreen__starbucks">
        <HomeScreenProduct
          description="We’re celebrating Earth Month with a new game—play for a chance to win the grand prizes, Bonus Stars, free drinks and more.*"
          imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70087.p"
          buttonText="Let's Play"
          background="#d4e9e2"
        />
      </div>
      <HomeScreenProduct
        title="Creamy, dreamy cold brew"
        description="Enjoy Vanilla Sweet Cream and Salted Caramel Cream Cold Brews, slow-steeped and topped with extra deliciousness."
        imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70205.png"
        buttonText="Order cold brew"
        background="#f0ebe0"
      />
      <div className="homeScreen__reverse">
        <HomeScreenProduct
          title="your day awaits"
          description="Grab Bacon & Gruyère Sous Vide Egg Bites or a Bacon, Sausage & Egg Wrap for a hearty morning start."
          imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70206.png"
          buttonText="Order hot breakfast"
          background="#f0ebe0"
        />
      </div>
      <div className="homeScreen__moreWaysToDiscover">
        <h2>More ways to discover</h2>
      </div>

      <div className="homeScreen__info font">
        <HomeScreenProduct
          title="Order and pick up. Easy as that."
          description="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
          imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70203.jpg"
          buttonText="See pickup options"
          background="#d4e9e2"
        />
        <HomeScreenProduct
          title="PayPal is bringing even more Stars"
          description="Earn an extra Star for every $2 you spend when you reload or pay with PayPal."
          imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70204.jpg"
          buttonText="Learn more"
          background="#d4e9e2"
        />
      </div>
      <HomeScreenProduct
        title="SPRING CHEER IS HERE"
        description="A Starbucks® delivery on Uber Eats will brighten up any day.***"
        imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-69199.jpg"
        buttonText="Order now"
        background="#f0ebe0"
      />
      <div className="homeScreen__reverse font">
        <HomeScreenProduct
          title="Get to know your coffee"
          description="The coffee we serve you every day is grown sustainably, using responsible practices that empower farmers and help protect our planet."
          imgSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-70207.jpg"
          buttonText="Explore more"
          background="#d4e9e2"
        />
      </div>
      <div className="homeScreen__texts">
        <p>
          *NO PURCHASE NECESSARY. LEGAL RESIDENTS OF THE 50 UNITED STATES (D.C.)
          18 AND OLDER AND WHO ARE MEMBERS OF THE STARBUCKS® REWARDS LOYALTY
          PROGRAM AT THE TIME OF ENTRY. VOID WHERE PROHIBITED. Participating
          stores only. Promotion ends 4/30/21. For Official Rules, how to enter
          without purchase, prizes, and odds, visit
          https://www.starbucksearthmonthgame.com. Sponsor: Starbucks
          Corporation, 2401 Utah Ave. S, Seattle, WA 98134. “Nondairy Drinks for
          a Year” means the winner will receive a daily credit for one year for
          one free standard menu-sized handcrafted beverage that can be
          customized with nondairy add-in. Credits are redeemable at a
          participating Starbucks store. Ready-to-drink, bottled, and alcoholic
          beverages are excluded. Credits are non-transferable and expire within
          24 hours. Entrants can receive a maximum of 2 plays per day, plus,
          bonus opportunities to earn additional plays. Game plays may be earned
          on eligible transactions at a participating Starbucks store. You must
          pay with your Starbucks Card or linked payment method, or by scanning
          your Starbucks App prior to checkout. Purchases of alcohol, Starbucks
          Cards and Starbucks Card reloads are excluded. See starbucks.com/terms
          or details.
        </p>
        <p>
          **Earn 1 (one) Star for every $2 or a ½ (half) Star for every $1 you
          spend when you use PayPal to reload your Starbucks Card or earn 1
          (one) extra Star for every $2 or an extra ½ (half) Star for every $1
          spent when you pay directly with PayPal at participating Starbucks
          stores. Offer valid 4/1 - 4/30/2021. Stars cannot be earned on
          purchases of alcohol or Starbucks Cards. For details about Starbucks
          Rewards, including earn rates, visit starbucks.com/rewards. Starbucks
          and PayPal reserve the right to cancel, extend, suspend or modify this
          Offer in part or in its entirety at any time without notice, for any
          reason in their sole discretion.
        </p>
        <p>
          ***Menu limited. Restricted delivery area. Available in participating
          locations only. Prices for Starbucks® items purchased through Uber
          Eats may be higher than posted in stores or as marked. See the Uber
          Eats app for details. Small-order fee may apply.
        </p>
      </div>
    </div>
  );
}

export default HomeScreen;
