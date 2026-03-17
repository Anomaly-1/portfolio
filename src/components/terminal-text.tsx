'use client';
import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  className?: string;
  scrambleDuration?: number;
  holdDuration?: number;
  trigger?: boolean;
}

const CHARACTERS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

export function TerminalText({
  text,
  className = '',
  scrambleDuration = 400,
  holdDuration = 200,
  trigger = true,
}: TerminalTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(trigger);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (trigger) {
      setIsScrambling(true);
    }
  }, [trigger]);

  useEffect(() => {
    if (!isScrambling) {
      // Blink cursor after animation is done
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      return () => clearInterval(cursorInterval);
    }
  }, [isScrambling]);

  useEffect(() => {
    if (!isScrambling) return;

    let timeoutId: NodeJS.Timeout;
    let frameCount = 0;
    const totalFrames = Math.ceil((scrambleDuration / 1000) * 60); // 60fps

    const animateFrame = () => {
      frameCount++;
      const progress = frameCount / totalFrames;

      if (progress < 1) {
        // Create scrambled text with progressively more characters revealed
        const revealedChars = Math.floor(text.length * progress);
        let newText = '';

        for (let i = 0; i < text.length; i++) {
          if (i < revealedChars) {
            newText += text[i];
          } else {
            newText += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          }
        }

        setDisplayText(newText);
        timeoutId = setTimeout(animateFrame, 1000 / 60);
      } else {
        // Animation complete
        setDisplayText(text);
        timeoutId = setTimeout(() => setIsScrambling(false), holdDuration);
      }
    };

    animateFrame();

    return () => clearTimeout(timeoutId);
  }, [text, isScrambling, scrambleDuration, holdDuration, trigger]);

  return (
    <span
      className={`font-mono ${className} ${
        isScrambling ? 'text-yellow-300' : 'text-yellow-400'
      } transition-colors duration-300`}
      style={{
        letterSpacing: '0.05em',
      }}
    >
      {displayText}
      <span
        style={{
          opacity: showCursor ? 1 : 0,
          transition: 'opacity 200ms ease-in-out',
          marginLeft: '2px',
        }}
        className="inline-block w-1.5 h-3.5 bg-yellow-400"
      />
    </span>
  );
}
