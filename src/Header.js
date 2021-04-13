import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Example } from "./menu/Example";
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FindStore from "./FindStore";
import SignInButton from "./buttons/SignInButton";
import SignUpButton from "./buttons/SignUpButton";
import LogoutButton from "./buttons/LogoutButton";

function Header({menuPage}) {
    const user = useSelector(selectUser)
  return (
    <div className={`header ${menuPage && 'header__menuPage'}`}>
      <div className="header__left">
        <Link className="header__logo" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="starbucks logo"
          />
        </Link>
        <Link className="header__link" to="/menu">
          Menu
        </Link>
        <Link className="header__link" to="/">
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
              <Link to='/account/signin'>
              <SignInButton />
              </Link>
              <Link to='/account/create'>
              <SignUpButton />
              </Link>
              </>
          ): (
              <div className="header__logout">
                  {menuPage ? <LogoutButton /> : <Link to='/menu'> Order Now</Link>}
              </div>
          )}
      </div>
    </div>
  );
}

export default Header;