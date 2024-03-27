import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)




    return (
        <div>
            <h1>give feedback</h1>
            <Button onClick={() => setGood((good+1))} text={"good"}></Button>
            <Button onClick={() => setNeutral((neutral+1))} text={"neutral"}></Button>
            <Button onClick={() => setBad((bad+1))} text={"bad"}></Button>
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}

const Statistics = ({good, neutral, bad}) => {

    if (good === 0 && neutral === 0 && bad ===0) {
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }

    let total = parseInt(good) + parseInt(neutral) + parseInt(bad);
    let average = averages(good,neutral,bad);
    let positivePercent = postivePercentage(good,neutral,bad);


    return (
        <div>
            <h1>statistics</h1>
            <table>
                <tbody>
                <tr>
                    <td><StatisticsLine text={"good"} value={good}></StatisticsLine></td>
                </tr>
                <tr>
                    <td><StatisticsLine text={"neutral"} value={neutral}></StatisticsLine></td>
                </tr>
                <tr>
                    <td><StatisticsLine text={"bad"} value={bad}></StatisticsLine></td>
                </tr>
                <tr>
                    <td><StatisticsLine text={"all"} value={total}></StatisticsLine></td>
                </tr>
                <tr>
                    <td><StatisticsLine text={"average"} value={average}></StatisticsLine></td>
                </tr>
                <tr>
                    <td><StatisticsLine text={"positive"} value={positivePercent}></StatisticsLine></td>
                </tr>
                </tbody>
            </table>
        </div>
    )

}

const StatisticsLine = ({text, value}) => <p>{text} {value} </p>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const averages = (num1, num2, num3) => {
    let total = parseInt(num1) + parseInt(num2) + parseInt(num3);
    let numerator = parseInt(num1 - num3);
    return parseFloat(numerator/total);
}

const postivePercentage = (positive, neutral, negative) => {
    let total = parseInt(positive) + parseInt(neutral) + parseInt(negative);
    return parseFloat((positive/total)*100);
}

export default App


