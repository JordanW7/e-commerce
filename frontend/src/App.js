import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { auth } from "./firebase/firebase";
import Header from "./components/Header";

const HomePage = lazy(() =>
  import(/* webpackChunkName: "HomePage" */ "./pages/HomePage/HomePage")
);

const ShopPage = lazy(() =>
  import(/* webpackChunkName: "ShopPage" */ "./pages/ShopPage/ShopPage")
);

const SignInPage = lazy(() =>
  import(/* webpackChunkName: "SignInPage" */ "./pages/SignInPage/SignInPage")
);

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
    return () => unsubscribeFromAuth();
  }, []);

  return (
    <Fragment>
      <Header currentUser={currentUser} />
      <Suspense fallback={<div />}>
        <Switch>
          <Route path="/signin" component={SignInPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default App;
