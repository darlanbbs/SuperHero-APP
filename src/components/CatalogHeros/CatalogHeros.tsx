"use client";
import { useState, useEffect } from "react";
import PaginationComponent from "../Pagination/Pagination";
import { Superhero } from "../../Types/DataInterface";
import { fetchApiData } from "../../services/db";
import CardHero from "../Card/CardHero";
import { Grid } from "@mui/material";
import ToastBattle from "../Toast/ToastBattle";
import Header from "../Header/Header";

function CatalogHeros() {
  const [dados, setDados] = useState<Superhero[]>([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [search, setSearch] = useState("");
  const [dadosFiltrados, setDadosFiltrados] = useState<Superhero[]>([]);
  const itensPorPagina = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchApiData();
        setDados(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const searchLowerCase = search.toLowerCase();
    const filteredData = dados.filter((item) =>
      item.biography.fullName.toLowerCase().includes(searchLowerCase)
    );
    setDadosFiltrados(filteredData);
  }, [search, dados]);

  const startIndex = (paginaAtual - 1) * itensPorPagina;
  const endIndex = paginaAtual * itensPorPagina;
  const dadosPaginados = dadosFiltrados.slice(startIndex, endIndex);
  const pageLength = Math.ceil(dadosFiltrados.length / itensPorPagina);

  const handleChange = (event: any) => {
    setSearch(event.target.value as string);
  };

  return (
    <>
      <Header onChange={handleChange} value={search} />
      {dadosPaginados.length > 0 ? (
        <div>
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
          <div className="fixed bottom-2 left-2">
            <ToastBattle />
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}

export default CatalogHeros;
