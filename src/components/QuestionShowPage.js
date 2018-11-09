import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";

// When passing props to a JSX rendered component,
// write them as HTML attributes where its values must
// be surrounded by {...} if their type is something other than a string.
const QuestionShowPage = () => (
  <main className="QuestionShowPage">
    <QuestionDetails
      title="What is your favourite colour?"
      body="Red, green, blue, magenta, yellow, etc."
      view_count={101}
      created_at={new Date().toLocaleDateString()}
      updated_at={new Date().toLocaleDateString()}
    />
    <h2>Answers</h2>
    <AnswerDetails
      body="Blue."
      name="Bob Lewyn"
      created_at={new Date().toLocaleDateString()}
    />
  </main>
);

export default QuestionShowPage;
