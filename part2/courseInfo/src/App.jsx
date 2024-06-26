import {render} from "react-dom";
import Course from './components/Course.jsx'
/*
const Header = ({ course }) => <h1 key={course.id}>{course.name}</h1>

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) =>
    <p key={part.id}>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>{


    return(
        <>
            {parts.map(partOfCourse =>
                <Part key={partOfCourse.id} part={partOfCourse}></Part>
            )}
    </>)}

const Course.jsx = ({course}) => {
    const sumOfExercises = course.parts.reduce((sum, coursePart) => {
        return sum + coursePart.exercises
    }, 0)

    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts}></Content>
            <Total sum={sumOfExercises}></Total>
        </div>

    )
}
*/


const App = () => {

    const course = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        <>
            <h1>Web development curriculum</h1>
            {course.map(courseInArray => (
                <Course key={courseInArray.id} course={courseInArray}/>
            ))}
        </>
    );
};


export default App
