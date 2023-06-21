import React from "react";
import { Link } from "react-router-dom";

export default function UserProfile(props) {
  return (
    <div>
      <nav>
        <h1>User Profile</h1>
        <h4>Accounts Balance: {props.balance}</h4>
        <Link to="/">Home</Link>
      </nav>
      <div>
        <h3>Username: {props.username}</h3>
        <h3> Member Since: {props.memberSince}</h3>
      </div>
    </div>
  );
}
