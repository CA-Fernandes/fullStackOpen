import Header from "./Header";
import Content from "./Content";

const Course = ({ courses }) => {
	console.log(courses);

	return (
		<div>
			{courses.map((course) => (
				<div key={course.id}>
					<Header courseName={course.name}></Header>
					<Content parts={course.parts}></Content>
				</div>
			))}
		</div>
	);
};

export default Course;
