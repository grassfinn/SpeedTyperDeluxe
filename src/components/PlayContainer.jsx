import { useState } from 'react';
import Sentence from './Sentence';
import AnswerChoiceContainer from './AnswerChoiceContainer';

function PlayContainer({post}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState('none');


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
        {isPlaying && <AnswerChoiceContainer string={post.body} />}
        {/* AnswerChoice */}
      </section>
    </div>
  );
}

export default PlayContainer;
