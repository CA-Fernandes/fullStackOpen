const Total = ({ parts }) => {
	const total_exercises = parts.reduce((sum, part) => sum + part.exercises, 0);
	return <strong>total of {total_exercises} exercises</strong>;
};

export default Total;
