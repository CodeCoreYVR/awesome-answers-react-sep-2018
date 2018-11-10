import React from "react";

const AnswerDetails = props => (
  <div className="AnswerDetails">
    <p>{props.body}</p>
    <p>By {props.author.first_name}</p>
    <p>Created at: {props.created_at}</p>
  </div>
);

export default AnswerDetails;
