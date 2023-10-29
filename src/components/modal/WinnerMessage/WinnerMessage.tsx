import React from "react";

interface WinnerMessageProps {
  winner: string;
}

const WinnerMessage = ({ winner }: WinnerMessageProps) => {
  return (
    <div className={winner === "Draw" ? "text-gray-500" : "text-green-500"}>
      {winner !== "Draw" && <h2>Winner</h2>}
      <h1>{winner}</h1>
    </div>
  );
};

export default WinnerMessage;
