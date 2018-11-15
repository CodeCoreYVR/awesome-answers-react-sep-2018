import React from "react";
import QuestionShowPage from "./QuestionShowPage";
import QuestionIndexPage from "./QuestionIndexPage";
import CurrentDateTime from "./CurrentDateTime";

const App = () => (
  <div className="App">
    <CurrentDateTime />
    <QuestionShowPage />
    <QuestionIndexPage />
  </div>
);

export default App;
