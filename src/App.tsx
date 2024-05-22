import { useState } from 'react'
import './App.css'
import { sentences } from './sentences';

function App() {
  const [score, setScore] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(0);

  return (
    <>
    <h1>Verb Quiz</h1>
    <div>
      My Score : {score}
    </div>
    
    <div>
      {sentences[currentSentence].question}
    </div>
    </>
  )
}

export default App
