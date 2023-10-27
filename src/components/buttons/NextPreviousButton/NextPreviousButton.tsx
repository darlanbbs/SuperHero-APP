import React from "react";

type Props = {
  paginaAtual: number;
  text: string;
  onHandleClick: () => void;
  paramDisbled: number;
};

const NextPreviousButton = ({
  paginaAtual,
  text,
  onHandleClick,
  paramDisbled,
}: Props) => {
  return (
    <button
      disabled={paginaAtual === paramDisbled}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
        paginaAtual === paramDisbled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onHandleClick}
    >
      {text}
    </button>
  );
};

export default NextPreviousButton;
