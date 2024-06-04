const Header = ({course}) => <h2 key={course.id}>{course.name}</h2>

const Total = ({sum}) => <h4>Total of {sum} exercises</h4>

const Part = ({part}) =>
    <p key={part.id}>
        {part.name} {part.exercises}
    </p>

const Content = ({parts}) => {
    return (
        <>
            {parts.map(partOfCourse =>
                <Part key={partOfCourse.id} part={partOfCourse}></Part>
            )}
        </>)
}

const Course = ({course}) => {
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

export default Course
