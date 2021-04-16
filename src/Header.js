import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Example } from "./menu/Example";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FindStore from "./FindStore";
import SignInButton from "./buttons/SignInButton";
import SignUpButton from "./buttons/SignUpButton";
import LogoutButton from "./buttons/LogoutButton";

function Header({ menuPage, rewardPage }) {
  const user = useSelector(selectUser);
  return (
    <div className={`header ${(menuPage || rewardPage) && "header__fixed"}`}>
      <div className="header__left">
        <Link className="header__logo" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="starbucks logo"
          />
        </Link>
        <Link
          className={`header__link ${menuPage && "header__linkBorder"}`}
          to="/menu"
        >
         Menu
        </Link>
        <Link
          className={`header__link ${rewardPage && "header__linkBorder"}`}
          to="/reward"
        >
          Rewards
        </Link>
        <Link className="header__link" to="/">
          Gift Cards
        </Link>
      </div>
      <div className="header__right">
        <Example />
        <FindStore />
        {!user ? (
          <>
            <SignInButton />
            <SignUpButton />
          </>
        ) : (
          <div className="header__logout">
            {menuPage || rewardPage ? (
              <LogoutButton />
            ) : (
              <Link to="/menu"> Order Now</Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
