import { useState } from "react";

const Header = ({heading}) => (
  <div>
    <h1>{heading}</h1>
  </div>
)

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
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
  return(
    <div>
      <Header heading = "give feedback"/>
      <Button onClick = {() => incrementOnClick(good, setGood)} text="Good"></Button>
      <Button onClick = {() => incrementOnClick(neutral, setNeutral)} text="Neutral"></Button>
      <Button onClick = {() => incrementOnClick(bad, setBad)} text="Bad"></Button>
      <Header heading = "statistics"/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App