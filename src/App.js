import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from "./components/Header";
// import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Magazine from "./components/Magazine";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />

        <div className="row">
          {/* <Sidebar /> */}

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/magazine">
              <Magazine />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
