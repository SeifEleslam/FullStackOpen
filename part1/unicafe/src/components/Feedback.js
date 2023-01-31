import { feedbacks } from "../App";

export const Feedback = (props) => {
  return (
    <>
      <h1>Give Feedback</h1>
      {feedbacks.map((feedback, i) => (
        <button key={i} onClick={() => props.handleFeedback(feedback)}>
          {feedback}
        </button>
      ))}
    </>
  );
};
