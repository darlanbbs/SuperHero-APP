import * as React from "react";
import NextPreviousButton from "../Buttons/NextPreviousButton/NextPreviousButton";
import PaginationButton from "../Buttons/PaginationButton/PaginationButton";

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
    <div className="flex items-center justify-center space-x-4 my-4">
      <NextPreviousButton
        onHandleClick={irParaPaginaAnterior}
        text="Previous Page"
        paginaAtual={paginaAtual}
        paramDisbled={1}
      />

      {Array.from({ length: pageLength }, (_, index) => (
        <PaginationButton
          key={index}
          numeroPagina={index + 1}
          paginaAtual={paginaAtual}
          setPaginaAtual={setPaginaAtual}
          paginasParaMostrar={4}
        />
      ))}

      <NextPreviousButton
        onHandleClick={irParaProximaPagina}
        text="Next Page"
        paginaAtual={paginaAtual}
        paramDisbled={pageLength}
      />
    </div>
  );
}
