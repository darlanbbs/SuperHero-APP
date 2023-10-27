import * as React from "react";

interface PaginationProps {
  setPaginaAtual: React.Dispatch<React.SetStateAction<number>>;
  paginaAtual: number;
}

export default function PaginationComponent({
  setPaginaAtual,
  paginaAtual,
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
    </div>
  );
}
