import {useState} from 'react'

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

    const votes = new Uint8Array(anecdotes.length);

    const [selected, setSelected] = useState(0)
    const [selectedVote, setSelectedVote] = useState(votes);

    const changeAnecdote = () => {
        let randomNumber = Math.floor(Math.random()*8)
       const newSelected = randomNumber;

        setSelected(newSelected);
    }

    const incrementVote = () => {
        const newVoted = [...selectedVote];
        newVoted[selected] +=1;
        setSelectedVote(newVoted);
    }

    const mostVotedAnecdote = () => {
        const highestValue = Math.max(...selectedVote);
        return selectedVote.indexOf(highestValue);
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {selectedVote[selected]} votes</p>
            <Button onClick={changeAnecdote} text={"next anecdote"}></Button>
            <Button onClick={incrementVote} text={"vote"}></Button>
            <h1>Anecdote with most votes</h1>
            <p>{anecdotes[mostVotedAnecdote()]}</p>
            <p>has {selectedVote[mostVotedAnecdote()]} votes</p>

        </div>
    )
}

const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>


export default App
