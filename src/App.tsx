import { useState } from 'react'
import './App.css'
import { sentences } from './sentences';
import { PlayerRegistration } from './components/PlayerRegistration';
import { Player } from './players';
import { saveHighScore } from './lib/saveHighScore';

let leftAttempts = 3;

function App() {
  const [score, setScore] = useState(0);
  const [player, setPlayer] = useState<Player | null>(null);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false)
  const [myQuestion, setMyQuestion] = useState(sentences[currentSentence].question)



  const possibleAnswers = sentences[currentSentence].choices;
  let attemptColor;
  if (leftAttempts === 1) {
    attemptColor = "red"
  }
  else {
    attemptColor = "green"
  }

  const isCorrectAnswer = (ans: string) => ans === sentences[currentSentence].answer

  function onAnswer(ans: string) {
    if (isCorrectAnswer(ans)) {
      setScore(score + 1);
      setMyQuestion(myQuestion.replace("_", `${ans}`));
      alert('Good Answer !');
      setIsDisabled(true);
    }
    else if (leftAttempts > 1) {
      leftAttempts--;
      console.log(leftAttempts)
      setScore(score - 0.1)
    }

    else {
      setIsDisabled(true);
      leftAttempts--;
      setMyQuestion(myQuestion.replace("_", `${ans}`));
      alert(`Wrong Answer, the correct answer was ${sentences[currentSentence].answer.toUpperCase()}`)
    }
  }

  function onNext() {
    if (!player) {
      throw new Error("Ghost player ! ");

    }
    if ((currentSentence + 1) < sentences.length) {
      setCurrentSentence(currentSentence + 1);
      setMyQuestion(sentences[currentSentence + 1].question)
      setIsDisabled(() => !isDisabled);
      leftAttempts = 3;
    }
    else {
      saveHighScore({ playerId: player.id, playerScore: score })
      alert("You have answered every question! Congratulations!");
      setCurrentSentence(0);
      setScore(0)
    }
  }

  return (
    <>
      <h1>Verb Quiz</h1>
      <PlayerRegistration player={player!} setPlayer={setPlayer} />
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
        <p style={{ color: `${attemptColor}` }}><i><u>Attemps left:</u> {leftAttempts}</i></p>
      </div>

      <div>
        <button className="next" onClick={() => onNext()}>next</button>
      </div>
    </>
  )
}

export default App
