import React, { Fragment, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./pages/HomePage/HomePage")
);

const ShopPage = lazy(() =>
  import(/* webpackChunkName: "ShopPage" */ "./pages/ShopPage/ShopPage")
);

const App = () => {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default App;
