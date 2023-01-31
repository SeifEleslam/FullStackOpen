import { useState } from "react";
import { Anecdotes } from "./components/Anecdotes";
import { Mostvotes } from "./components/Mostvote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);
  // const [mostVote, setMostVote] = useState();

  const handleVote = () => {
    let copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  const handleNext = () => {
    let newSelect = Math.round(Math.random() * (anecdotes.length - 1));
    newSelect !== selected && anecdotes.length > 1
      ? setSelected(newSelect)
      : handleNext();
  };

  const mostVote = points.indexOf(Math.max(...points));

  return (
    <div>
      <Anecdotes
        value={anecdotes[selected]}
        votes={points[selected]}
        handleVote={handleVote}
        handleNext={handleNext}
      />
      <Mostvotes anecdote={anecdotes[mostVote]} votes={points[mostVote]} />
    </div>
  );
};

export default App;
