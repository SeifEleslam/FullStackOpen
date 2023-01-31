export const Anecdotes = (props) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{props.value}</p>
      <p>has {props.votes} votes</p>
      <button onClick={props.handleVote}>vote</button>
      <button onClick={props.handleNext}>next anecdote</button>
    </>
  );
};
