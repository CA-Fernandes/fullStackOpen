import { useState} from "react";

const Header = ({heading}) => (
  <div>
    <h1>{heading}</h1>
  </div>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const StatisticLine = ({text, statistic}) => (
    <>
    <td>{text}</td>
    <td>{statistic}</td>
  </>
)

const Statistics = (props) => {
  if (props.total === 0) {
    return (<div>No feedback given</div>)
  }
  return( 
    <table>
      <tbody>
        <tr><StatisticLine text="good" statistic={props.goodStatisticLine}/></tr>
        <tr><StatisticLine text="neutral" statistic={props.neutralStatisticLine}/></tr>
        <tr><StatisticLine text="bad" statistic={props.badStatisticLine}/></tr>
        <tr><StatisticLine text="all" statistic={props.total}/></tr>
        <tr><StatisticLine text="average" statistic={props.average}/></tr>
        <tr><StatisticLine text="positive" statistic={props.positivePercentage}/></tr>
      </tbody>
    </table>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementOnClick = (state, setButtonStatisticLinee) => {
    console.log("prior state: ", state);
    setButtonStatisticLinee(state + 1)
    console.log("state after update: ", state)
  }

  const total = good + neutral + bad;
  const average = total === 0 
  ? 0 
  : (good - bad) / total;

  const positivePercentage = (good / total) * 100

  return(
    <div>
      <Header heading = "give feedback"/>
      <Button onClick = {() => incrementOnClick(good, setGood)} text="Good"></Button>
      <Button onClick = {() => incrementOnClick(neutral, setNeutral)} text="Neutral"></Button>
      <Button onClick = {() => incrementOnClick(bad, setBad)} text="Bad"></Button>
      <Header heading = "statistics"/>
      <Statistics goodStatisticLine = {good} neutralStatisticLine = {neutral} badStatisticLine = {bad} total = {total} average = {average} positivePercentage = {`${positivePercentage} %`}/>
    </div>
  )
}

export default App