import { useState } from 'react'
import './App.css'
import { sentences } from './sentences';

let leftAttempts = 3;

function App() {
  const [score, setScore] = useState(0);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false)
  const [myQuestion, setMyQuestion] = useState(sentences[currentSentence].question)

  const possibleAnswers = sentences[currentSentence].choices;
  let attemptColor;
  if (leftAttempts === 1){
    attemptColor = "red"}
  else{
    attemptColor = "green"
  }
  

  function onAnswer(ans: String) {
    if (ans === sentences[currentSentence].answer) {
      setScore(score + 1);
      setMyQuestion(myQuestion.replace("_", `${ans}`));
      alert('Good Answer !');
      setIsDisabled(true);
    }
    else if (ans !== sentences[currentSentence].answer && leftAttempts > 1) {
      leftAttempts = leftAttempts - 1;
      console.log(leftAttempts)
      setScore(score - 0.1)
    }

    else {
      setIsDisabled(true);
      leftAttempts = leftAttempts - 1;
      setMyQuestion(myQuestion.replace("_", `${ans}`));
      alert(`Wrong Answer, the correct answer was ${sentences[currentSentence].answer.toUpperCase()}`)
    }
  }

  function onNext() {
    setCurrentSentence(currentSentence + 1);
    setMyQuestion(sentences[currentSentence +1].question)
    setIsDisabled(() => !isDisabled);
    leftAttempts = 3;
  }

  return (
    <>
      <h1>Verb Quiz</h1>
      <div>
        <h2>
          My Score : {score}
        </h2>

      </div>

      <div style={{ marginTop: '150px' }}>
        <p style={{ fontFamily: 'sans-serif', fontSize: '30px' }}>
          {myQuestion}
        </p>
        <ul>
          {possibleAnswers.map((ans) => <button className="answers" disabled={isDisabled} key={sentences[currentSentence].choices.indexOf(ans)} onClick={() => onAnswer(ans)}>{ans}</button>)}
        </ul>
        <p style={{color:`${attemptColor}`}}><i><u>Attemps left:</u> {leftAttempts}</i></p>
      </div>

      <div>
        <button className="next" onClick={() => onNext()}>next</button>
      </div>
    </>
  )
}

export default App
