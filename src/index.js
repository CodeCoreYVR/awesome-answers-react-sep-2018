import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// A React Component is a function that returns a React element.
// A React element is the object returned by the function
// React.createElement(...). The object is minimal version of a
// a DOM node containing the bare minimum properties.

// Your React components must be written as PascalCase. That is capitalized
// camelCase. Otherwise, React will treat it as an HTML tag and not render your
// component.

// const QuestionDetails = () => (
//   <div className="QuestionDetails">
//     <h2>What is your favourite colour?</h2>
//     <p>Red, green, blue, magenta, yellow, etc.</p>
//     <p>
//       <small>Seen 10 time(s)</small>•<small>Created 10 days ago</small>•
//       <small>Last edited 2 hours ago</small>
//     </p>
//   </div>
// );

// To execute a JavaScript expression inside of JSX, you
// must write between {...}. The express must return a string
// or a React element or an array of React elements.
const QuestionDetails = props => (
  <div className="QuestionDetails">
    <h2>{props.title}</h2>
    <p>{props.body}</p>
    <p>
      <small>Seen {props.view_count} time(s)</small>•
      <small>Created {props.created_at}</small>•
      <small>Last edited {props.updated_at}</small>
    </p>
  </div>
);

const AnswerDetails = () => (
  <div className="AnswerDetails">
    <p>Red... No, wait! Blue</p>
    <p>By Ulises Wisozk</p>
    <p>Created at: 2018-01-01</p>
  </div>
);

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
    <AnswerDetails />
  </main>
);

ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
