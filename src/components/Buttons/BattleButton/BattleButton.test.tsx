import { render, screen } from "@testing-library/react";
import BattleButton from "./BattleButton";

describe("<BattleButton />", () => {
  const id = 1;
  it("should render the button", () => {
    const { container } = render(<BattleButton id={id} />);

    expect(screen.getByRole("button", { name: /Battle/i })).toBeInTheDocument();
  });
});
