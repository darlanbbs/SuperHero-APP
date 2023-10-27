"use client";
import { fetchApiData } from "@/app/config/db";
import { useState, useEffect } from "react";
import PaginationComponent from "../Pagination/Pagination";

function CatalogHeros() {
  const [dados, setDados] = useState(null);
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

  // Lógica para dividir os dados em páginas
  const startIndex = (paginaAtual - 1) * itensPorPagina;
  const endIndex = paginaAtual * itensPorPagina;
  const dadosPaginados = dados ? dados.slice(startIndex, endIndex) : [];



  return (
    <div>
      {dadosPaginados.length > 0 ? (
        <div>
          <h1>Dados da API</h1>
          <pre>{JSON.stringify(dadosPaginados, null, 2)}</pre>
          <PaginationComponent paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual}/>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
}

export default CatalogHeros;
