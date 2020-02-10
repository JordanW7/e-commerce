import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./pages/HomePage/HomePage")
);

const ShopPage = lazy(() =>
  import(/* webpackChunkName: "ShopPage" */ "./pages/ShopPage/ShopPage")
);

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Suspense>
  );
};

export default App;
