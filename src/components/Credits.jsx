import React, { useState } from "react";
import { Link } from "react-router-dom";

function Credits(props) {
  const [creAmount, setCreAmount] = useState(0);
  const [creDescription, setCreDescription] = useState("");
  const [creSubmissionDate, setCreSubmissionDate] = useState(null);
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value: creditsValue } = e.target.credits;
    props.setCredits((prevCredits) => prevCredits + parseInt(creditsValue));
    setCreAmount(parseInt(creditsValue));
    const { value: descriptionValue } = e.target.description;
    setCreDescription(descriptionValue);
    setCreSubmissionDate(new Date());

    const newSubmission = {
      amount: parseInt(creditsValue),
      description: descriptionValue,
      submissionDate: new Date(),
    };

    setSubmissions([...submissions, newSubmission]);
    e.target.reset();
  };

  return (
    <div>
      <nav>
        <h1>Credits</h1>
        <h4>Accounts Balance: {props.balance}</h4>
        <div>
          <Link to="/">Home</Link>
          <Link to="/Debits">Debits</Link>
        </div>
      </nav>
      <h2>Credits Amount: {props.credits}</h2>
      <div className="credit-card">
        <form onSubmit={handleSubmit}>
          <input type="number" name="credits" placeholder="Add Credits" />
          <input type="text" name="description" placeholder="Add Description" />
          <button type="submit">Submit</button>
        </form>
        <div>
          <h5>Submissions:</h5>
          {submissions.map((submission, index) => (
            <div key={index}>
              <h3>Amount: {submission.amount}</h3>
              <h3>Description: {submission.description}</h3>
              <h3>
                Submission Date: {submission.submissionDate.toLocaleString()}
              </h3>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Credits;
