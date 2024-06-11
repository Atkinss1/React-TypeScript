import Part from "./Part";
import { CoursePart } from "../types";

interface ContentProps {
  courseParts: Array<CoursePart>
}

const Content = ({ courseParts }: ContentProps) => {
  
  return (
    <>
      {courseParts.map(part => {
       return <Part key={part.name} courseParts={part} />
      })}
    </>
  );
};

export default Content