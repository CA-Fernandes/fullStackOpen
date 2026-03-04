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

  const positivePercentage = good / total

  return(
    <div>
      <Header heading = "give feedback"/>
      <Button onClick = {() => incrementOnClick(good, setGood)} text="Good"></Button>
      <Button onClick = {() => incrementOnClick(neutral, setNeutral)} text="Neutral"></Button>
      <Button onClick = {() => incrementOnClick(bad, setBad)} text="Bad"></Button>
      <Header heading = "statistics"/>
      <Stat text="good" statistic={good}/>
      <Stat text="neutral" statistic={neutral}/>
      <Stat text="bad" statistic={bad}/>
      <Stat text="all" statistic={total}/>
      <Stat text="average" statistic={average}/>
      <Stat text="positive" statistic={`${positivePercentage}%`}/>
    </div>
  )
}

export default App