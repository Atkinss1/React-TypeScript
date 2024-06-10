interface CoursePart {
  name: string,
  exerciseCount: number
}

interface ContentProps {
  courseParts: Array<CoursePart>
}

const Content = (props: ContentProps) => {
  
  return (
    <>
      <p>
        {props.courseParts.map((obj) => (
          <p>
            {obj.name} {obj.exerciseCount}
          </p>
        ))}
      </p>
    </>
  )
};

export default Content;