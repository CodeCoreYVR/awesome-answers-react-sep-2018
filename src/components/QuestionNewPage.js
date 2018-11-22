import React, { Component } from "react";
import QuestionForm from "./QuestionForm";
import { Question } from "../requests";

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: []
    };

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
    Question.create(params).then(question => {
      if (question.errors) {
        this.setState({ errors: question.errors });
      } else {
        this.props.history.push(`/questions/${question.id}`);
      }
    });
  }

  render() {
    return (
      <main className="QuestionNewPage">
        <h1>New Question</h1>
        <QuestionForm
          errors={this.state.errors}
          onSubmit={this.createQuestion}
        />
      </main>
    );
  }
}

export default QuestionNewPage;
