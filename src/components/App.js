import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import NavBar from "./NavBar";
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";
import WelcomePage from "./WelcomePage";

// When react-router-dom, you must wrap your root component
// inside of of the <BrowserRouter> component.
const App = () => (
  <BrowserRouter>
    <div className="App">
      <NavBar />
      <Route path="/" exact component={WelcomePage} />
      <Route path="/questions/id" exact={true} component={QuestionShowPage} />
      <Route path="/questions" exact component={QuestionIndexPage} />
    </div>
  </BrowserRouter>
);

export default App;
