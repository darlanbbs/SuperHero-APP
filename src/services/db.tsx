"use client"
export const fetchApiData = async () => {
  const url = "http://homologacao3.azapfy.com.br/api/ps/metahumans";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Erro ao buscar dados da API: ${error}`);
  }
};
