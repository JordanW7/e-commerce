import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./pages/HomePage/HomePage")
);

const ShopPage = lazy(() =>
  import(/* webpackChunkName: "ShopPage" */ "./pages/ShopPage/ShopPage")
);

const SignInPage = lazy(() =>
  import(/* webpackChunkName: "SignInPage" */ "./pages/SignInPage/SignInPage")
);

const Routing = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <SignInPage />)}
        />
        <Route path="/shop" component={ShopPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Suspense>
  );
};

export default Routing;
