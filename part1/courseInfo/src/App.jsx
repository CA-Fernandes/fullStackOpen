import {render} from "react-dom";

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
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
    }
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = (props) => {

    return(
        <div>
            {/* eslint-disable-next-line react/prop-types */}
        <h1>{props.course}</h1>
        </div>
    )

}

const Content = (props) => {

    return(
    <>
        {/* eslint-disable-next-line react/prop-types */}
        <Parts parts={props.parts[0]}/>
        {/* eslint-disable-next-line react/prop-types */}
        <Parts parts={props.parts[1]}/>
        {/* eslint-disable-next-line react/prop-types */}
        <Parts parts={props.parts[2]}/>
    </>
    )
}

const Total = (props) => {

    return(
        <>
            {/* eslint-disable-next-line react/prop-types */}
        <p>number of exercsies {props.parts[0].exercises}</p>
        </>
    )
}

const Parts = (props) => {

    return(
        <>
            {/* eslint-disable-next-line react/prop-types */}
        <p>{props.parts.name} {props.parts.exercises}</p>
        </>
    )
}


export default App
