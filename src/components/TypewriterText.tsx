
import React, { useEffect, useState } from 'react';

const phrases = [
  "Computer Science Undergrad",
  "Web Dev",
  "Tech Enthusiast",
  "ML Dev",
  " Prompt engineer"
];

const TypewriterText = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentPhrase = phrases[currentPhraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText === currentPhrase) {
          // Pause at the end of typing
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
        setCurrentText(currentPhrase.slice(0, currentText.length + 1));
      } else {
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          return;
        }
        setCurrentText(currentPhrase.slice(0, currentText.length - 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentPhraseIndex, isDeleting]);

  return (
    <p className="text-xl md:text-2xl font-medium gradient-text h-8">
      {currentText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypewriterText;
