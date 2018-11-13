import React, { Component } from "react";
// `Component` is a named export. Unlike `React` which is
// a default export.

// To create a named export in one of our files we write

// export statement as follows:
// export class Component { ... }
// export const Component = ...

// class Component { ... }
// export { Component }
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import aSingleQuestion from "./aSingleQuestion";

// When passing props to a JSX rendered component,
// write them as HTML attributes where its values must
// be surrounded by {...} if their type is something other than a string.
class QuestionShowPage extends Component {
  render() {
    return (
      <main className="QuestionShowPage">
        <QuestionDetails
          title="What is your favourite colour?"
          body="Red, green, blue, magenta, yellow, etc."
          view_count={101}
          created_at={new Date().toLocaleDateString()}
          updated_at={new Date().toLocaleDateString()}
        />
        <h2
          style={{
            fontWeight: "300",
            color: "darkgreen"
          }}
        >
          Answers
        </h2>
        <AnswerList answers={aSingleQuestion.answers} />
      </main>
    );
  }
}

export default QuestionShowPage;
