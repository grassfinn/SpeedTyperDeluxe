import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AnswerChoiceContainer from '../components/AnswerChoiceContainer';
import { randomElement, shuffle } from '../utils/utils';
import Sentence from '../components/Sentence';
import PlayContainer from '../components/PlayContainer';

export default function Play() {
  const { posts } = useLoaderData();
  const [isDesktop, setIsDesktop] = useState(true);
  

  const post = randomElement(posts);
  

  useEffect(() => {
    if (window.innerWidth <= 800) {
      return setIsDesktop(false);
    }
    return setIsDesktop(true);
  }, [isDesktop]);

  return (
    <PlayContainer post={post} isDesktop={isDesktop} />
  );
}

async function getData() {
  const res = await fetch('https://dummyjson.com/posts');
  const data = await res.json();
  return data;
}

export { getData };
