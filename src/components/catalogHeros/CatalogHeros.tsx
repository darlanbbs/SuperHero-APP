"use client";
import { fetchApiData } from "@/app/config/db";
import { useState, useEffect } from "react";
import PaginationComponent from "../Pagination/Pagination";
import { Superhero } from "@/Interface/DataInterface";

function CatalogHeros() {
  const [dados, setDados] = useState<Superhero[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const itensPorPagina = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApiData();
        setDados(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const startIndex = (paginaAtual - 1) * itensPorPagina;
  const endIndex = paginaAtual * itensPorPagina;
  const dadosPaginados = dados ? dados.slice(startIndex, endIndex) : [];
  const pageLength = dados ? Math.ceil(dados.length / itensPorPagina) : 0;
  return (
    <div>
      {dadosPaginados.length > 0 ? (
        <div>
          <h1>Dados da API</h1>
          <PaginationComponent
            paginaAtual={paginaAtual}
            setPaginaAtual={setPaginaAtual}
            pageLength={pageLength}
          />
          <pre>{JSON.stringify(dadosPaginados, null, 2)}</pre>
          <PaginationComponent
            paginaAtual={paginaAtual}
            setPaginaAtual={setPaginaAtual}
            pageLength={pageLength}
          />
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}

export default CatalogHeros;
