import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Magazine from "./components/Magazine";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="container-fluid">
        <Header />

        <div className="row">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route path="/product/:id" component={ProductDetail} />
            <Route exact path="/magazine">
              <Magazine />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
