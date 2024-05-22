import { useState } from 'react'
import './App.css'
import { sentences } from './sentences';

function App() {
  const [score, setScore] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(0);

  const possibleAnswers = sentences[currentSentence].choices
  
  function onAnswer(ans:String){
    if (ans === sentences[currentSentence].answer){
      setScore(score + 1);
      alert('Good Answer !');
      setCurrentSentence(currentSentence + 1)
    }

    else {
      alert(`Wrong Answer, the correct answer was ${sentences[currentSentence].answer}`);
      setCurrentSentence(currentSentence + 1)
    }
  }

  return (
    <>
    <h1>Verb Quiz</h1>
    <div>
      My Score : {score}
    </div>
    
    <div>
      {sentences[currentSentence].question}
    </div>
    <div>
    <ul>
      {possibleAnswers.map((ans)=><button onClick = {() => onAnswer(ans)}>{ans}</button>)}
      </ul>
    </div>
      
    
    </>
  )
}

export default App
