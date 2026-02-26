const Header = (props) => {
  return (
      <h1>{props.course}</h1>
  );
}

const Content = (props) => {
  return (
    <>
      <Part part = {props.firstPart} numberOfExercises = {props.numberOfExercises1}/>
      <Part part = {props.secondPart} numberOfExercises = {props.numberOfExercises2}/>
      <Part part = {props.thirdPart} numberOfExercises = {props.numberOfExercises3}/>
    </>
  );
}

const Part = (props) => {
  return (
    <p>{props.part} {props.numberOfExercises}</p>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
  );
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course}/>
      <Content firstPart = {part1.name} numberOfExercises1 = {part1.exercises}
      secondPart = {part2.name} numberOfExercises2 = {part2.exercises}
      thirdPart = {part3.name} numberOfExercises3 = {part3.exercises}
      />
      <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises}/>
    </div>
  );
}

export default App
