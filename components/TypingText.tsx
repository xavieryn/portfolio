"use client";

import { useState, useEffect } from "react";

const LINES = [
  "Hi, I'm Xavier Nishikawa",
  "Hola, me llamo Xavier Nishikawa",
  "ヤマト西川です",
];

const TYPING_SPEED = 80;
const PAUSE_AT_END = 2000;
const DELETING_SPEED = 50;

export default function TypingText() {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentLine = LINES[lineIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentLine.length) {
            setCharIndex((prev) => prev + 1);
          } else {
            setIsDeleting(true);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setLineIndex((prev) => (prev + 1) % LINES.length);
          }
        }
      },
      isDeleting
        ? DELETING_SPEED
        : charIndex === currentLine.length
          ? PAUSE_AT_END
          : TYPING_SPEED,
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, currentLine]);

  return (
    <h1
      className="text-3xl md:text-4xl lg:text-5xl font-bold min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] flex items-center justify-start text-doodle-blue"
    >
      {currentLine.slice(0, charIndex)}
      <span className="animate-pulse text-doodle-blue">
        |
      </span>
    </h1>
  );
}
