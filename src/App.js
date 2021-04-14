import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fade } from 'react-awesome-reveal'
import HomeScreen from "./screens/HomeScreen";
import Header from "./Header";
import Footer from "./Footer";
import SignInForm from "./forms/SignInForm";
import SignUpForm from "./forms/SignUpForm";

function App() {
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
            <Header />
            <SignInForm />
          </Route>
          <Route path="/account/create" exact>
            <Header />
            <SignUpForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
