import React, { Component } from "react";
import QuestionForm from "./QuestionForm";

import bunchOfQuestions from "./bunchOfQuestions";

window.questions = bunchOfQuestions;

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [...bunchOfQuestions]
    };

    // Use the `bind` method on functions to permanently set their
    // `this` to the first argument of the `bind` method.
    this.deleteQuestion = this.deleteQuestion.bind(this);
    // We often do this in React for methods that we pass as callbacks
    // to props or higher-order functions.
    this.createQuestion = this.createQuestion.bind(this);
  }

  deleteQuestion(questionId) {
    console.log("Delete button clicked!");

    // To do ALL state changes in class-based component you
    // must the `setState` method.
    // - It takes an object as a first argument where its property-value
    //   pairs get merged with the current state at an optimal of
    //   react's choosing.
    // - Using `setState` is asynchronous operation.

    this.setState({
      questions: this.state.questions.filter(q => q.id !== questionId)
    });
  }

  createQuestion(params) {
    this.setState({
      questions: [
        {
          id: Math.max(...this.state.questions.map(q => q.id)) + 1,
          ...params
        }
      ].concat(this.state.questions)
    });
  }

  render() {
    return (
      <main className="QuestionIndexPage">
        <h1>Question Index</h1>
        <QuestionForm onSubmit={this.createQuestion} />
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
              <small>
                <em>{question.id}</em>
              </small>{" "}
              <a href="#">{question.title}</a>
              <br />
              <button onClick={() => this.deleteQuestion(question.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default QuestionIndexPage;
