import React from "react";
import { render } from "@testing-library/react";
import WinnerMessage from "./WinnerMessage/WinnerMessage";
const winner = "Winner";
test("verifica o vencedor com base nos powerstats", () => {
  const { getByText } = render(<WinnerMessage winner={winner} />);

  const vencedorElement = getByText(/Winner/i);

  expect(vencedorElement).toBeInTheDocument();
});
