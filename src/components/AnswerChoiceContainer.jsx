import { useState } from 'react';
import { randomElement, shuffle } from '../utils/utils';
import AnswerChoice from './AnswerChoice';

function AnswerChoiceContainer({ string }) {
  const sentence = string.split(' ');
  let correctIndex = 0;
  const words = document.getElementsByClassName('word');
  const [choices, setChoices] = useState(
    shuffle(
      createChoices(sentence).map((item, index) => (
        <AnswerChoice key={index} check={checkChoice} content={item} />
      ))
    )
  );

  function checkChoice(e) {
    const currentItem = e.target;
    if (currentItem.textContent === sentence[correctIndex]) {
      words[correctIndex].classList.add('correct');
      correctIndex++;
      return setChoices(
        shuffle(
          createChoices(sentence).map((item, index) => (
            <AnswerChoice key={index} check={checkChoice} content={item} />
          ))
        )
      );
    }
    if (correctIndex > sentence.length - 1){
        return
    }
  }

  function createChoices(arr) {
    const correctAnswer = arr[correctIndex];
    const optionTwo = randomElement(arr);
    const optionThree = randomElement(arr);
    const optionFour = randomElement(arr);
    return [correctAnswer, optionTwo, optionThree, optionFour];
  }

  return <div className="answer-choices">{choices}</div>;
}

export default AnswerChoiceContainer;
