import React from "react";
import { Route, Switch, Redirect } from "react-router";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import DetailProduct from "./pages/DetailProduct";

function App() {
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <DetailProduct />
          </Route>
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
