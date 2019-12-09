import React, { useState } from "react";
import "./App.css";
import LoginPage from "./pages/login-page/login-page.component";
import MainPage from "./pages/main-page/main-page.component";
import PostPage from "./pages/post-page/post-page.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { TokenContext } from "./contexts/contexts";

const App = () => {
  const [token, setToken] = useState(null);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/login"
            render={() => (token ? <Redirect to="/" /> : <LoginPage />)}
          />
          <Route
            exact
            path="/:site"
            render={props =>
              token ? <MainPage {...props} /> : <Redirect to="/login" />
            }
          />
          <Route exact path="/" render={() => <Redirect to="/1" />} />
          <Route
            exact
            path="/post/:id"
            render={props =>
              token ? <PostPage {...props} /> : <Redirect to="/login" />
            }
          />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </TokenContext.Provider>
  );
};

export default App;
