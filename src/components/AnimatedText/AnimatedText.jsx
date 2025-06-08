import React, { useEffect, useState } from "react";

const AnimatedText = ({ text, delay = 100 }) => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (visibleLetters < text.length) {
      const timeout = setTimeout(() => {
        setVisibleLetters((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [visibleLetters, text, delay]);

  return (
    <h1>
      {text.split("").map((char, index) => (
        <span
          key={index}
          style={{
            opacity: index < visibleLetters ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;
