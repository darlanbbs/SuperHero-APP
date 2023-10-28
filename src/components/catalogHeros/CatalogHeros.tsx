"use client";
import { useState, useEffect } from "react";
import PaginationComponent from "../Pagination/Pagination";
import { Superhero } from "@/Types/DataInterface";
import { fetchApiData } from "@/services/db";
import CardHero from "../Card/CardHero";
import { Grid } from "@mui/material";

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
          <Grid container spacing={4}>
            {dadosPaginados.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <CardHero superhero={item} key={item.id} />
              </Grid>
            ))}
          </Grid>
          <PaginationComponent
            paginaAtual={paginaAtual}
            setPaginaAtual={setPaginaAtual}
            pageLength={pageLength}
          />
        </div>
      ) : (
        <p>Loadind data...</p>
      )}
    </div>
  );
}

export default CatalogHeros;
