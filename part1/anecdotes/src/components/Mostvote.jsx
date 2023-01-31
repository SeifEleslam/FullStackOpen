export const Mostvotes = (props) => {
  console.log(props.votes);
  return (
    <>
      {!props.votes ? (
        <p>no votes yet</p>
      ) : (
        <div>
          <h1>Anecdote with most votes</h1>
          <p>{props.anecdote}</p>
          <p>has {props.votes} votes</p>
        </div>
      )}
    </>
  );
};
