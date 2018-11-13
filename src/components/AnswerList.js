import React from "react";
import AnswerDetails from "./AnswerDetails";

const AnswerList = props => (
  <ul className="AnswerList">
    {props.answers.map(answer => (
      <li key={answer.id}>
        {/* <AnswerDetails
          author={answer.author}
          body={answer.body}
          created_at={answer.created_at}
        /> */}
        {/*
          Use ... to take all properties object
          and pass them props to a rendered React element.
          In the line below, we take all answer properties
          (i.e. id, author, body, created_at and updated_at)
          and we pass them as props of AnswerDetails.
        */}
        <AnswerDetails
          onDeleteClick={id => props.onAnswerDeleteClick(id)}
          {...answer}
        />
      </li>
    ))}
  </ul>
);

export default AnswerList;
