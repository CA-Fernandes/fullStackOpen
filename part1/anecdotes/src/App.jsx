import { useState } from 'react'

const Button = (props) => (
  <>
  <button onClick={props.onClick}>{props.text}</button> 
  </>
)

const Anecdote = (props) => {
  return(
  <div>
    <h1>{props.heading}</h1>
    <AnecdoteLine text = {props.text}/>
    <Votes numberOfVotes={props.numberOfVotes}/>
  </div>
  )
}

const AnecdoteLine = ({text}) => (
  <div>{text}</div>
)

const Votes = ({numberOfVotes}) => (
  <div>has {numberOfVotes} votes</div>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votes = {0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0}
  const [selected, setSelected] = useState(0)
  const [votesForAnecdotes, setVotes] = useState(votes)
  

  const handleClickChangeAnecdote = () => {
    const randomInteger = getRandomInt(anecdotes.length)
    setSelected(randomInteger)
  }
  const handleClickUpvoteAnecdote = () => {
    const votesCopy = {...votesForAnecdotes}
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const getRandomInt = (max) => {
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored))
  }
  const getMostVotedIndex = (votesArray) => Object.keys(votesArray).reduce(
    (a, b) => votesArray[a] > votesArray[b] ? a : b);
  const mostVotedIndex = getMostVotedIndex(votesForAnecdotes)


  return (
    <div>
      <Anecdote heading = "Anecdote of the day" text = {anecdotes[selected]} numberOfVotes = {votesForAnecdotes[selected]}/>
      <Button onClick = {handleClickUpvoteAnecdote} text = "votes"/>
      <Button onClick = {handleClickChangeAnecdote} text = "next anecdote"/>
      <Anecdote heading = "Anecdote with most votes" text = {anecdotes[mostVotedIndex]} numberOfVotes = {votesForAnecdotes[mostVotedIndex]}/>
    </div>
  )
}

export default App
