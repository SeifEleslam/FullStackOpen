import { useEffect, useState } from "react";
import { feedbacks } from "../App";

export const Statistics = (props) => {
  const [total, setTotal] = useState(0);
  const [rate, setRate] = useState(0);
  useEffect(() => {
    console.log(props.feedback);
    let tempTotal = 0;
    let tempRate = 0;
    Object.keys(props.feedback).forEach((key) => {
      tempTotal += props.feedback[key];
      if (key === "good") tempRate += props.feedback[key];
      else if (key === "bad") tempRate -= props.feedback[key];
    });
    setTotal(tempTotal);
    setRate(tempRate);
  }, [props.feedback]);
  return (
    <>
      <h1>Statistics</h1>

      {total === 0 ? (
        <h2>No feedback given</h2>
      ) : (
        <table>
          <tbody>
            {feedbacks.map((feedback, i) => (
              <StatisticLine
                key={i}
                type={feedback}
                value={props.feedback[feedback]}
              />
            ))}
            <StatisticLine type="average" value={(rate / total).toFixed(2)} />
            <StatisticLine
              type="positive"
              value={((props.feedback.good / total) * 100).toFixed(2) + " %"}
            />
          </tbody>
        </table>
      )}
    </>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.type}</td>
      <td>{props.value}</td>
    </tr>
  );
};
