import React from "react";

interface WinnerMessageProps {
  winner: string;
}

const WinnerMessage = ({ winner }: WinnerMessageProps) => {
  return (
    <div style={{ color: "green" }}>
      <h2>Winner</h2>
      <h1>{winner}</h1>
    </div>
  );
};

export default WinnerMessage;
