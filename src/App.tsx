import { useState } from 'react'
import './App.css'
import { sentences } from './sentences';

function App() {
  const [score, setScore] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false)

  const possibleAnswers = sentences[currentSentence].choices
  
  function onAnswer(ans:String){
    if (ans === sentences[currentSentence].answer){
      setScore(score + 1);
      alert('Good Answer !');
      setIsDisabled(true);
    }
    else {
      alert(`Wrong Answer, the correct answer was ${sentences[currentSentence].answer.toUpperCase()}`);
      setScore(score - 0.1)
    }
  }

  function onNext(){
    setCurrentSentence(currentSentence + 1);
    setIsDisabled(()=> !isDisabled)
  }

  return (
    <>
    <h1>Verb Quiz</h1>
    <div>
      <h2>
        My Score : {score}
      </h2>
      
    </div>
    
    <div>
      <p style={{fontFamily:'sans-serif', fontSize:'30px'}}>
        {sentences[currentSentence].question}
      </p>
      
    </div>
    <div>
    <ul>
      {possibleAnswers.map((ans)=><button className="answers" disabled={isDisabled} key={sentences[currentSentence].choices.indexOf(ans)} onClick = {() => onAnswer(ans)}>{ans}</button>)}
    </ul>
    <button className="next" onClick = {()=> onNext()}>next</button>
    </div>
      
    
    </>
  )
}

export default App
