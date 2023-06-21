import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useFetcher,
} from "react-router-dom";

function App() {
  const [userName, setUserName] = useState("Jiamin Shi");
  const [memberSince, setMemberSince] = useState("06/12/2023");
  const [debits, setDebits] = useState(0);
  const [credits, setCredits] = useState(0);
  const [balance, setBalance] = useState(0);

  async function fetchDebit() {
    try {
      const URL = `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`;
      const response = await axios.get(URL);
      console.log(response.data);
      setDebits(response.data);
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  useEffect(() => {
    fetchDebit();
  }, []);
  useEffect(() => {
    fetchCredit();
  }, []);

  async function fetchCredit() {
    try {
      const URL = `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`;
      const response = await axios.get(URL);
      console.log(response.data);
      setCredits(response.data);
    } catch (error) {
      console.log(error);
      return 0;
    }
  }

  useEffect(() => {
    setBalance(credits - debits);
  }, [debits, credits]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home balance={balance} />} />
        <Route
          path="/UserProfile"
          element={
            <UserProfile
              username={userName}
              balance={balance}
              memberSince={memberSince}
            />
          }
        />
        <Route
          path="/Debits"
          element={
            <Debits debits={debits} balance={balance} setDebits={setDebits} />
          }
        />
        <Route
          path="/Credits"
          element={
            <Credits
              credits={credits}
              balance={balance}
              setCredits={setCredits}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
