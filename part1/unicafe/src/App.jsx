import { useState } from "react";

const Header = ({heading}) => (
  <div>
    <h1>{heading}</h1>
  </div>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Stat = ({text, statistic}) => (
  <div>{text} {statistic}</div>
)

const Statistics = (props) => {
  if (props.total === 0) {
    return (<div>No feedback given</div>)
  }
  return( 
  <div>
    <Stat text="good" statistic={props.goodStat}/>
    <Stat text="neutral" statistic={props.neutralStat}/>
    <Stat text="bad" statistic={props.badStat}/>
    <Stat text="all" statistic={props.total}/>
    <Stat text="average" statistic={props.average}/>
    <Stat text="positive" statistic={props.positivePercentage}/>
  </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementOnClick = (state, setButtonState) => {
    console.log("prior state: ", state);
    setButtonState(state + 1)
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
      <Statistics goodStat = {good} neutralStat = {neutral} badStat = {bad} total = {total} average = {average} positivePercentage = {`${positivePercentage} %`}/>
    </div>
  )
}

export default App