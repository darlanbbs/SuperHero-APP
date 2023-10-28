import { render, screen } from "@testing-library/react";
import BattleButton from "./BattleButton";

describe("<BattleButton />", () => {
  const id = 1;
  it("should render the button", () => {
    // renderiza o component
    const { container } = render(<BattleButton id={id} />);

    // busca o elemento e verifica a existência dele
    expect(screen.getByRole("button", { name: /Battle/i })).toBeInTheDocument();
  });
});
