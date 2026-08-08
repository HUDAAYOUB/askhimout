import { useState } from "react";

function App() {
  const [yesSize, setYesSize] = useState(1);
  const [position, setPosition] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "No 😭",
    "Are you sure? 🥺",
    "Really? 😭",
    "Think again 💔",
    "Last chance! 😤",
  ];

  function moveButton() {
    setPosition({
      x: Math.random() * (window.innerWidth - 100),
      y: Math.random() * (window.innerHeight - 50),
    });

    setYesSize((prev) => prev + 0.1);
    setMessageIndex((prev) => (prev + 1) % messages.length);
  }

  if (accepted) {
    return (
      <div className="container">
        <video
          src="/aa.mp4"
          autoPlay
          loop
          muted
        />

        <h1>Yay! I'm so happy you said yes! 💖</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <video
        src="/WhatsApp Video 2026-08-07 at 8.53.52 PM1.mp4"
        autoPlay
        loop
        muted
      />

      <h1>Will you go out with me? 🥺💗</h1>

      <button
        className="yes"
        onClick={() => setAccepted(true)}
        style={{ transform: `scale(${yesSize})` }}
      >
        Yes 💕
      </button>

      <button
        className="no"
        onMouseEnter={moveButton}
        style={
          position
            ? {
                position: "absolute",
                left: position.x,
                top: position.y,
              }
            : {}
        }
      >
        {messages[messageIndex]}
      </button>
    </div>
  );
}

export default App;