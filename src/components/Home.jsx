import React from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import MyImage from "../assets/bank.jpeg";

export default function Home(props) {
  return (
    <div>
      <nav>
        <h1>Bank of React</h1>
        <AccountBalance balance={props.balance} />
        <Link to="/userProfile">User Profile</Link>
        <Link to="/Debits">Debits</Link>
        <Link to="/Credits">Credits</Link>
      </nav>
      <img src={MyImage} alt="Bank" />
    </div>
  );
}
