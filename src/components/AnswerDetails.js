import React from "react";

const AnswerDetails = props => (
  <div className="AnswerDetails">
    <p>{props.body}</p>
    {/* <p>By {props.author.first_name}</p> */}
    <p>Created at: {props.created_at}</p>
    <button onClick={() => props.onDeleteClick(props.id)}>Delete</button>
  </div>
);

export default AnswerDetails;
