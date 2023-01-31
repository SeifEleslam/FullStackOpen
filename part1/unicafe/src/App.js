import { useState } from "react";
import { Feedback } from "./components/Feedback";
import { Statistics } from "./components/Statistics";
function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const handleFeedback = (val) => {
    if (val === "good") setGood(good + 1);
    else if (val === "bad") setBad(bad + 1);
    else if (val === "neutral") setNeutral(neutral + 1);
  };
  return (
    <>
      <Feedback handleFeedback={handleFeedback} />
      <Statistics feedback={{ good, bad, neutral }} />
    </>
  );
}

export const feedbacks = ["good", "neutral", "bad"];

export default App;
