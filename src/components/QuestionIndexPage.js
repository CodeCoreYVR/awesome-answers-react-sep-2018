import React, { Component } from "react";
import bunchOfQuestions from "./bunchOfQuestions";

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [...bunchOfQuestions]
    };
  }

  render() {
    return (
      <main className="QuestionIndexPage">
        <h1>Question Index Page</h1>
        <ul
          style={{
            listStyle: "none",
            paddingLeft: "0"
          }}
        >
          {this.state.questions.map(question => (
            <li
              key={question.id}
              style={{
                marginBottom: "10px"
              }}
            >
              <a href="#">{question.title}</a>
              <br />
              <small>
                <em>{question.id}</em>
              </small>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default QuestionIndexPage;
