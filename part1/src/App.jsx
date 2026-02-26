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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content firstPart = {part1} numberOfExercises1 = {exercises1}
      secondPart = {part2} numberOfExercises2 = {exercises2}
      thirdPart = {part3} numberOfExercises3 = {exercises3}
      />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
    </div>
  );
}

export default App
