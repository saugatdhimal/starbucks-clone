import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import HomeScreen from "./screens/HomeScreen";
import Header from "./Header";
import Footer from "./Footer";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./features/userSlice";
import MenuScreen from "./screens/MenuScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route path="/account/signin" exact>
            {user ? <Redirect to="/menu" /> : <SignInScreen />}
          </Route>
          <Route path="/account/create" exact>
          {user ? <Redirect to="/menu" /> : <SignUpScreen />}
          </Route>
          <Route path="/menu" exact>
            <Header menuPage />
            <MenuScreen />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
