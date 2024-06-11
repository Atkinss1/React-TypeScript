import { CoursePart } from "../types";

interface PartProps {
  courseParts: CoursePart
}

const assertNever = (value: never): never => { 
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};

const Part = ({ courseParts }: PartProps) => {

  switch (courseParts.kind) {
    case "basic":
      return (
        <div>
          <h3>{courseParts.name} {courseParts.exerciseCount}</h3>
          <p>{courseParts.description}</p>
          <br/>
        </div>
      );
    case "group":
      return (
        <div>
          <h3>{courseParts.name} {courseParts.exerciseCount}</h3>
          <p>Group Projects: {courseParts.groupProjectCount}</p>
          <br/>
        </div>
      );
    case "background":
      return (
        <div>
          <h3>{courseParts.name} {courseParts.exerciseCount}</h3>
          <p>{courseParts.description}</p>
          <p>Material: {courseParts.backgroundMaterial}</p>
          <br/>
        </div>
      );
    default:
      return assertNever(courseParts);
  }
}

export default Part;