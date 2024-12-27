"use client";

type props = {
  score: number;
  increaseScore: () => void;
};

export default function List({ score, increaseScore }: props) {
  return (
    <div>
      <p>Score: {score}</p> {/* Display the score */}
      <button onClick={increaseScore}>+</button>
    </div>
  );
}
