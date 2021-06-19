import React, { useEffect } from "react";
import "./App.css";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = null;

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Login
      } else {
        //logout
      }
    });
    return unsubsribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
