import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticLine = (props) => {

    return (
        <>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </>
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = (props) => {

    if (props.sum === 0) {
        return (
            <div>No feedback given</div>
        )
    }

    return (
        <table>
            <tbody>
                <tr><StatisticLine text="good" value={props.good} /></tr>
                <tr><StatisticLine text="neutral" value={props.neutral} /></tr>
                <tr><StatisticLine text="bad" value={props.bad} /></tr>
                <tr><StatisticLine text="all" value={props.sum} /></tr>
                <tr><StatisticLine text="average" value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / props.sum} /></tr>
                <tr><StatisticLine text="positive" value={props.good / props.sum * 100 + " %"} /></tr>
            </tbody>
        </table>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button handleClick={() => setGood(good + 1)} text="good" />
                <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
                <Button handleClick={() => setBad(bad + 1)} text="bad" />
            </div>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} sum={good + neutral + bad} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)