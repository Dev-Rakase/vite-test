import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import GameCard from "../src/components/GameCard";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from "react-router";

describe("Game Card component ", () => {
  it("should render correctly with props", () => {
    const props = {
      id: "x",
      name: "Game 1",
      image: "//stage.whgstage.com/scontent/images/games/NETHEWISHMASTER.jpg",
      categories: ["top"],
      jackport: 10000,
    };
    render(
      <BrowserRouter>
        <GameCard {...props} />
      </BrowserRouter>
    );
    const image = screen.getByRole("img");
    expect(image);
    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText("€10,000.00")).toBeInTheDocument();
  });
});
