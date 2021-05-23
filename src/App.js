import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
          </Route>
          <Route path="/login">
            <h1>Login page</h1>
          </Route>
          {/* This is the default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDWlgmq_XtIkcdlG32L-EaeDaGK9AA5LSk",
//   authDomain: "clone-9fa46.firebaseapp.com",
//   projectId: "clone-9fa46",
//   storageBucket: "clone-9fa46.appspot.com",
//   messagingSenderId: "237833592516",
//   appId: "1:237833592516:web:4f7eeea0b5d22650c9f391",
//   measurementId: "G-Z9MGNBVFML"
// };

export default App;
