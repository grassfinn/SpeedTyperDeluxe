import { useState } from 'react';
import Sentence from './Sentence';
import AnswerChoiceContainer from './AnswerChoiceContainer';

function PlayContainer({ post, isDesktop }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState('none');

  const sentence = post.body.split(' ');
  const words = document.getElementsByClassName('word');

  function checkInput(e) {
    let correctIndex = e.target.value.split(' ').length - 1;
    let currentWord = e.target.value.split(' ')[correctIndex];
    console.log(correctIndex)
    if (currentWord === sentence[correctIndex]) {
     return words[correctIndex].classList.add('correct');
    }
    return words[correctIndex].classList.remove('correct');
  }

  return (
    <div>
      {difficulty === 'none' && (
        <select
          defaultValue={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          name="user-difficulty"
          id="user-difficulty"
        >
          <option disabled value="none">
            Select a Difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      )}

      {difficulty != 'none' && !isPlaying && (
        <button onClick={() => setIsPlaying(true)} className="play-btn">
          Play
        </button>
      )}
      {isPlaying && <Sentence string={post} />}
      <section className="mobile-play-area">
        {/* answer choice  */}
        {/* Game Loop */}
        {/* 1 Four boxes of words show up, one of them contains the correct option */}
        {/* 2 When the user presses the correct box, the word in the string is lit up green */}
        {/* 3 Remove first word from the array and redo step 1 */}
        {/* 4 When the whole string has been completed time stops/ points generated  */}
        {/* Component structure */}
        {isPlaying && !isDesktop && (
          <AnswerChoiceContainer string={post.body} />
        )}
        {isPlaying && isDesktop && (
          <textarea
            onChange={checkInput}
            style={{ width: 450, minHeight: 100 }}
            placeholder={post.body}
          ></textarea>
        )}
        {/* AnswerChoice */}
      </section>
    </div>
  );
}

export default PlayContainer;
