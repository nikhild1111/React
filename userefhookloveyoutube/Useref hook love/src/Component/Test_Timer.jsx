import { useEffect, useRef } from "react";

function ExamTimer() {
  const timeRef = useRef(60);        // remaining time
  const textRef = useRef(null);      // DOM element

  useEffect(() => {
    const id = setInterval(() => {
      timeRef.current -= 1;

      // direct DOM update (no re-render)
      textRef.current.innerText = `Time Left: ${timeRef.current}s`;

      if (timeRef.current === 0) {
        clearInterval(id);
      }
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <h2 ref={textRef}>Time Left: 60s</h2>;
}

export default ExamTimer;


// If you say this clearly:

// “For timers like clocks or online exam countdowns, I use useRef to store the interval ID or remaining time because these values don’t affect rendering. This avoids unnecessary re-renders and improves performance.”

// 🔥 This shows:

// You understand React re-rendering

// You know when NOT to use state

// You think about performance

// You know real-world use cases