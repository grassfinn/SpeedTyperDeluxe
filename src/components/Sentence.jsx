import React from 'react';

function Sentence({string}) {
  const sentence = string.body.split(' ');
  const spans = sentence.map((item, index) => (
    <span key={index} className="word">
      {item}{' '}
    </span>
  ));
  return <div>{spans}</div>;
}

export default Sentence;
