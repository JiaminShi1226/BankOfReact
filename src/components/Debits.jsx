import React, { useState } from "react";
import { Link } from "react-router-dom";

function Debits(props) {
  const [debAmount, setDebAmount] = useState(0);
  const [debdescription, setDebDescription] = useState("");
  const [debsubmissionDate, setDebSubmissionDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value: debitsValue } = e.target.debits; // Getting the value of the debits input field
    props.setDebits((prevDebits) => prevDebits + parseInt(debitsValue)); // Updating the debits state variable in the parent component
    setDebAmount(parseInt(debitsValue));
    const { value: descriptionValue } = e.target.description; // Getting the value of the description input field
    setDebDescription(descriptionValue);
    setDebSubmissionDate(new Date());

    const newSubmission = {
      amount: parseInt(debitsValue),
      description: descriptionValue,
      submissionDate: new Date(),
    }; // Creating a new submission object

    props.setDebSubmissions([...props.debsubmissions, newSubmission]); // Adding the new submission to the list of submissions
    e.target.reset();
  };

  return (
    <div>
      <nav>
        <h1>Debits</h1>
        <h4>Accounts Balance: {props.balance}</h4>
        <div>
          <Link to="/">Home</Link>
          <Link to="/Credits">Credits</Link>
        </div>
      </nav>
      <h2>Debits Amount: {props.debits}</h2>
      <div className="debit-card">
        <form onSubmit={handleSubmit}>
          <input type="number" name="debits" placeholder="Add Debits" />
          <input type="text" name="description" placeholder="Add Description" />
          <button type="submit">Submit</button>
        </form>
        <div>
          <h5>Submissions:</h5>
          {props.debsubmissions.map((submission, index) => (
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

export default Debits;
