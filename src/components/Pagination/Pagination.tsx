import * as React from "react";
import PaginationButton from "../buttons/PaginationButton/PaginationButton";

interface PaginationProps {
  setPaginaAtual: React.Dispatch<React.SetStateAction<number>>;
  paginaAtual: number;
  pageLength: number;
}

export default function PaginationComponent({
  setPaginaAtual,
  paginaAtual,
  pageLength,
}: PaginationProps) {
  const irParaProximaPagina = () => {
    setPaginaAtual(paginaAtual + 1);
  };

  const irParaPaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };
  return (
    <div>
      <button onClick={irParaPaginaAnterior} disabled={paginaAtual === 1}>
        Página Anterior
      </button>
      <button onClick={irParaProximaPagina}>Próxima Página</button>
      {Array.from({ length: pageLength }, (_, index) => (
        <PaginationButton
          key={index}
          numeroPagina={index + 1}
          paginaAtual={paginaAtual}
          setPaginaAtual={setPaginaAtual}
          paginasParaMostrar={4}
        />
      ))}
    </div>
  );
}
