import React, { Component } from "react";
import QuestionForm from "./QuestionForm";
import { Question } from "../requests";

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);
    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(params) {
    Question.create(params).then(question => {
      if (!question.errors) {
        this.props.history.push(`/questions/${question.id}`);
      }
    });
  }

  render() {
    return (
      <main className="QuestionNewPage">
        <h1>New Question</h1>
        <QuestionForm onSubmit={this.createQuestion} />
      </main>
    );
  }
}

export default QuestionNewPage;
