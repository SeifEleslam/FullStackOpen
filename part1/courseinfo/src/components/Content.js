import { Part } from "./contentComponents/Part";

export const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.parts.map((part, i) => (
        <Part key={i} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};
