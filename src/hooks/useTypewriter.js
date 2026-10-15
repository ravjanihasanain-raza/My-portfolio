import { useEffect, useState } from 'react';

export default function useTypewriter(words, { type = 90, erase = 45, hold = 1800 } = {}) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setText(words[0]);
      return undefined;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];

      if (!deleting) {
        charIndex += 1;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(tick, hold);
          return;
        }
        timer = setTimeout(tick, type);
      } else {
        charIndex -= 1;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
        timer = setTimeout(tick, erase);
      }
    };

    timer = setTimeout(tick, 900);
    return () => clearTimeout(timer);
  }, [words, type, erase, hold]);

  return text;
}
