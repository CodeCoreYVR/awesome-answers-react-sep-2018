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
import { Question } from "../requests";

// When passing props to a JSX rendered component,
// write them as HTML attributes where its values must
// be surrounded by {...} if their type is something other than a string.
class QuestionShowPage extends Component {
  // When writing your own constructor for React components,
  // you must take `props` as an argument.
  constructor(props) {
    // You must also call the constructor of its super class, Component, with
    // `super`.
    super(props);

    this.state = {
      loading: true,
      question: null
    };

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  componentDidMount() {
    // Components rendered by the <Route> component are passed
    // three props: history, location and match.

    // `match` holds property thats your URL's params.
    const id = this.props.match.params.id;
    Question.one(id).then(question => {
      this.setState({
        question: question,
        loading: false
      });
    });
  }

  deleteQuestion() {
    this.setState({
      question: null
    });
  }

  deleteAnswer(answerId) {
    const {
      question,
      question: { answers }
    } = this.state;

    this.setState({
      question: {
        ...question,
        answers: answers.filter(a => a.id !== answerId)
      }
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <main className="QuestionShowPage">
          <h2>Loading...</h2>
        </main>
      );
    }

    if (!this.state.question) {
      return (
        <main className="QuestionShowPage">
          <h1>Question doesn't exist!</h1>
        </main>
      );
    }

    return (
      <main className="QuestionShowPage">
        <QuestionDetails {...this.state.question} />
        <button onClick={this.deleteQuestion}>Delete</button>
        <h2
          style={{
            fontWeight: "300",
            color: "darkgreen"
          }}
        >
          Answers
        </h2>
        <AnswerList
          onAnswerDeleteClick={this.deleteAnswer}
          answers={this.state.question.answers}
        />
      </main>
    );
  }
}

export default QuestionShowPage;
