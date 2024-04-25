import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResultSummaryComponentChallengeByFronEndMentor from "./components/ResultSummaryComponentChallengeByFronEndMentor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ResultSummaryComponentChallengeByFronEndMentor />
    </>
  );
}

export default App;
