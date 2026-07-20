import { useState, useEffect } from 'react';

export default function TypingText({ words, speed = 80, pause = 2000 }) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIndex(charIndex + 1);
        }
      } else {
        setDisplay(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        } else {
          setCharIndex(charIndex - 1);
        }
      }
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return (
    <span className="typing-text">
      {display}
      <span className="typing-cursor">|</span>
    </span>
  );
}
