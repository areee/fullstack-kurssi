import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const MostVotes = (props) => {
    let i = 0
    let biggest = 0
    let biggestIndex = 0
    
    props.votes.forEach(value => {
        if (value > biggest) {
            biggest = value
            biggestIndex = i
        }
        i++
    })
    return(
        <div>
            {props.anecdotes[biggestIndex]}
            <p>has {props.votes[biggestIndex]} votes</p>
        </div>
    )
}

const App = (props) => {
    const [votes, setVotes] = useState(new Array(6 + 1).join('0').split('').map(parseFloat))    
    const [selected, setSelected] = useState(Math.floor(Math.random() * Math.floor(6)))    
    const handleClick = () => setSelected(Math.floor(Math.random() * Math.floor(6)))
    const handleVote = () => {
        const newVotes = [...votes]
        newVotes[selected] = newVotes[selected] + 1
        setVotes(newVotes)
    }
    
    return (
        <div>
            <h1>Anecdote of the day</h1>
            {props.anecdotes[selected]}
            <p>
                has {votes[selected]} votes
            </p>
            <p>
                <Button handleClick={handleVote} text="vote" />
                <Button handleClick={handleClick} text="next anecdote"/>
            </p>
            <h1>Anecdote with most votes</h1>
            <MostVotes votes={votes} anecdotes={props.anecdotes} />
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)