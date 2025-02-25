import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;
  const average = total == 0 ? 0 : (good - bad) / total;
  const porcentaje = (good/total) * 100;

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text={'good'}/>
        <Button handleClick={() => setNeutral(neutral + 1)} text={'neutral'}/>
        <Button handleClick={() => setBad(bad + 1)} text={'bad'}/>
      </div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>porcentaje {porcentaje}%</p>
    </div>
  )
}

export default App