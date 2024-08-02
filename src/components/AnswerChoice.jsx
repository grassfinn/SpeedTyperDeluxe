import React from 'react'

function AnswerChoice({content, check}) {
  return (
    <h1 onClick={check} className='answer-choice' >{content}</h1>
)
}

export default AnswerChoice