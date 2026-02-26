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
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]


  return (
    <div>
      <Header course = {course}/>
      <Content firstPart = {parts[0].name} numberOfExercises1 = {parts[0].exercises}
      secondPart = {parts[1].name} numberOfExercises2 = {parts[1].exercises}
      thirdPart = {parts[2].name} numberOfExercises3 = {parts[2].exercises}
      />
      <Total exercises1 = {parts[0].exercises} exercises2 = {parts[1].exercises} exercises3 = {parts[2].exercises}/>
    </div>
  );
}

export default App
