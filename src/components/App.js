import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionNewPage from "./QuestionNewPage";
import QuestionShowPage from "./QuestionShowPage";
import WelcomePage from "./WelcomePage";
import SignInPage from "./SignInPage";

// When react-router-dom, you must wrap your root component
// inside of of the <BrowserRouter> component.
const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/session/new" exact component={SignInPage} />
        <Route path="/questions/new" exact component={QuestionNewPage} />
        <Route
          path="/questions/:id"
          exact={true}
          component={QuestionShowPage}
        />
        <Route path="/questions" exact component={QuestionIndexPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
