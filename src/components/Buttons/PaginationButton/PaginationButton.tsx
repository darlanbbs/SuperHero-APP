import React from "react";

interface PaginationButtonProps {
  numeroPagina: number;
  paginaAtual: number;
  setPaginaAtual: React.Dispatch<React.SetStateAction<number>>;
  paginasParaMostrar: number;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  numeroPagina,
  paginaAtual,
  setPaginaAtual,
  paginasParaMostrar,
}) => {
  const handleClick = () => {
    setPaginaAtual(numeroPagina);
  };

  const mostrarBotao =
    Math.abs(paginaAtual - numeroPagina) < paginasParaMostrar;

  return mostrarBotao ? (
    <button
      className={`w-8 h-8 m-1 rounded-full ${
        numeroPagina === paginaAtual
          ? "bg-blue-500 text-white"
          : "bg-white text-black"
      }`}
      onClick={handleClick}
    >
      {numeroPagina}
    </button>
  ) : null;
};

export default PaginationButton;
