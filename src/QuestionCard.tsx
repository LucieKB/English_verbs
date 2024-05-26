import { sentences } from "./sentences";


export const QuestionCard = ({}) =>
{
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
    return (
        <>
        <div style={{ marginTop: '150px' }}>
<p style={{ fontFamily: 'sans-serif', fontSize: '30px' }}>
  {myQuestion}
</p>
<ul>
  {possibleAnswers.map((ans) => <button className="answers" disabled={isDisabled} key={sentences[currentSentence].choices.indexOf(ans)} onClick={() => onAnswer(ans)}>{ans}</button>)}
</ul>
<p style={{color:`${attemptColor}`}}><i><u>Attemps left:</u> {leftAttempts}</i></p>
</div>


</>
)

}