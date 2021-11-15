import React from "react";
import { Switch, Route } from "react-router-dom";
import loader from "./assets/loader.gif";
import { loaderContext } from "./Context/loader";

// Compponents
import Header from "./components/header";
import Articles from "./components/article";
import SignUp from "./components/authentication/signup";
import SignIn from "./components/authentication/signin";
import Home from "./components/Wall";
import Convos from "./components/Convos";
import Profile from "./components/profile";
// private Route
import Privateroutes from "./private/privateroutes";
// Provider
import { AuthProvider } from "./Context/AuthProvider";
import { toggleContext } from "./Context/toogle";
import UseStates from "./Context/states";

const App = () => {
  const {
    loading,
    setLoading,
    isWallLeft,
    setIsWallLeft,
    isWallRight,
    setIsWallRight,
    toggleCreate,
    setToggleCreate,
  } = UseStates();

  return (
    <div>
      <loaderContext.Provider value={{ loading, setLoading }}>
        {loading && (
          <div className="loading">
            <div className="loader">
              <img src={loader} alt="loader" />
            </div>
          </div>
        )}

        <AuthProvider>
          <toggleContext.Provider
            value={{
              isWallLeft,
              setIsWallLeft,
              isWallRight,
              setIsWallRight,
              toggleCreate,
              setToggleCreate,
            }}
          >
            <Header />
            <Switch>
              <Privateroutes exact path="/" component={Home} />
              <Privateroutes
                path="/articles"
                component={Articles}
                auth={false}
              />
              <Privateroutes path="/convos/:id" component={Convos} />
              <Privateroutes path="/profile/:id" component={Profile} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
            </Switch>
          </toggleContext.Provider>
        </AuthProvider>
      </loaderContext.Provider>
    </div>
  );
};

export default App;
